import { reactive } from 'vue'
import { client } from "../mjs/app.mjs"
import { Todo, QueryTodos, CreateTodo, UpdateTodo, DeleteTodos } from "../mjs/dtos.mjs"

let store = {
    /** @type {Todo[]} */
    todos: [],
    newTodo:'',
    filter: 'all',
    error:null,
    finishedTodos() { return this.todos.filter(x => x.isFinished) },
    unfinishedTodos() { return this.todos.filter(x => !x.isFinished) },
    filteredTodos() {
        return this.filter === 'finished'
            ? this.finishedTodos()
            : this.filter === 'unfinished'
                ? this.unfinishedTodos()
                : this.todos
    },
    async refreshTodos(errorStatus) {
        this.error = errorStatus
        let api = await client.api(new QueryTodos())
        if (api.succeeded) {
            this.todos = api.response.results
        }
    },
    async addTodo() {
        this.todos.push(new Todo({ text:this.newTodo }))
        let api = await client.api(new CreateTodo({ text:this.newTodo }))
        if (api.succeeded)
            this.newTodo = ''
        return this.refreshTodos(api.error)
    },
    async removeTodo(id) {
        this.todos = this.todos.filter(x => x.id !== id)
        let api = await client.api(new DeleteTodos({ ids:[id] }))
        await this.refreshTodos(api.error)
    },
    async removeFinishedTodos() {
        let ids = this.todos.filter(x => x.isFinished).map(x => x.id)
        if (ids.length === 0) return
        this.todos = this.todos.filter(x => !x.isFinished)
        let api = await client.api(new DeleteTodos({ ids }))
        await this.refreshTodos(api.error)
    },
    async toggleTodo(id) {
        const todo = this.todos.find(x => x.id === id)
        todo.isFinished = !todo.isFinished
        let api = await client.api(new UpdateTodo(todo))
        await this.refreshTodos(api.error)
    },
    changeFilter(filter) {
        this.filter = filter
    }
}
store = reactive(store)

const FilterTab = {
    template:/*html*/`<span @click.stop="store.changeFilter(filter)"
      :class="['cursor-pointer border-gray-200 dark:border-gray-700 text-sm font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white',
               filter === store.filter ? 'text-blue-700 dark:bg-blue-600' : 'text-gray-900 hover:text-blue-700 dark:bg-gray-700']"><slot></slot></span>`,
    props:{ filter:String },
    setup(props) {
        return { store }
    },
}

export default {
    components: { FilterTab },
    template: `
        <div class="mb-3">
            <text-input :status="store.error" id="text" label="" placeholder="What needs to be done?"
                        v-model="store.newTodo" v-on:keyup.enter.stop="store.addTodo()"></text-input>
        </div>

        <div v-cloak class="bg-white dark:bg-gray-900 shadow overflow-hidden rounded-md">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="todo in store.filteredTodos()" :key="todo.id" class="px-6 py-4">
                    <div class="relative flex items-start" v-on:click.stop="store.toggleTodo(todo.id)">
                        <div class="flex items-center h-6">
                            <svg v-if="todo.isFinished" class="cursor-pointer text-green-600 dark:text-green-400 h-5 w-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"></path>
                            </svg>
                            <svg v-else class="cursor-pointer h-5 w-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path>
                            </svg>
                        </div>
                        <div class="ml-3 flex-grow cursor-pointer">
                            <label :class="{'line-through':todo.isFinished}">{{ todo.text }}</label>
                        </div>
                        <div>
                            <svg class="cursor-pointer h-5 w-5" viewBox="0 0 24 24"
                                 v-on:click.stop="store.removeTodo(todo.id)">
                                <path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"></path>
                            </svg>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div v-cloak class="mt-4 flex justify-between">
            <div class="text-gray-400 leading-8 mr-4 ml-2 sm:ml-0">
                {{ store.unfinishedTodos().length }} <span class="hidden sm:inline">item(s)</span> left
            </div>

            <div class="inline-flex shadow-sm rounded-md">
                <filter-tab class="rounded-l-lg border" filter="all">
                    All
                </filter-tab>
                <filter-tab class="border-t border-b" filter="unfinished">
                    Active
                </filter-tab>
                <filter-tab class="rounded-r-md border" filter="finished">
                    Completed
                </filter-tab>
            </div>

            <div class="leading-8 ml-4 mr-2 sm:mr-0">
                <a href="#" :class="{ invisible: store.finishedTodos().length === 0 }" v-on:click.prevent="store.removeFinishedTodos()">
                    clear <span class="hidden sm:inline">completed</span>
                </a>
            </div>
        </div>
    `,
    props: { todos: Array },
    setup(props) {
        store.todos = props.todos || []
        return {
            store,
        }
    }
}
