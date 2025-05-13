import { createApp, ref, onMounted, shallowRef } from "vue"
import { JsonApiClient, leftPart, rightPart, appendQueryString, humanize, queryString } from "@servicestack/client"
import ServiceStackVue, { useClient, useAuth, useMetadata } from "@servicestack/vue"
import { Authenticate, AdminData } from "dtos.mjs"
import * as Sections from "/admin/sections/index.mjs"

export default {
    template:`
<div id="app" v-cloak>
    <sidebar-layout ref="sidebar">
        <div class="flex h-16 shrink-0 items-center">
            <a href="/admin" class="text-2xl whitespace-nowrap overflow-x-hidden flex items-center">
                <img class="mr-1 h-8 w-auto text-indigo-600 dark:text-indigo-300" src="/img/logo.svg" alt="Logo">
                <span class="hidden sm:block text-2xl font-semibold">Admin</span>
            </a>
        </div>
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li v-for="group in new Set(Object.keys(sections).flatMap(k => sections[k].group))">
                    <div v-if="group" class="text-sm font-semibold leading-6 text-gray-400 dark:text-gray-500">{{group}}</div>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="section in Object.keys(sections).map(k => sections[k].group === group ? sections[k] : null).filter(x => !!x)">
                            <a @click.prevent="navTo(section.id)" :class="[activeSection.id === section.id 
                                ? 'bg-gray-50 dark:bg-gray-900 text-indigo-600 dark:text-indigo-300' : 'cursor-pointer text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-gray-50 dark:hover:bg-gray-900', 
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold select-none']" @click="$forceUpdate()">
                                <icon :svg="section.icon" class="h-6 w-6 shrink-0 text-indigo-600 dark:text-indigo-300"></icon>
                                {{section.label}}
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="-mx-6 mt-auto">
                    <div v-if="showUserMenu" class="font-normal absolute z-10 -mt-10 left-6 w-60 origin-top-right rounded-md bg-white dark:bg-black py-1 shadow-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none right-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <a href="/auth/logout" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" role="menuitem" tabindex="-1">Logout</a>
                    </div>
                    <span v-if="user" @click="showUserMenu=!showUserMenu" class="flex cursor-pointer bg-gray-50 dark:bg-gray-900 items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900">
                        <img class="h-8 w-8 rounded-full bg-gray-50 dark:bg-gray-900" :src="user.profileUrl" alt="">
                        <span class="sr-only">Your profile</span>
                        <span aria-hidden="true">{{user.displayName || user.userName}}</span>
                    </span>
                </li>
            </ul>
        </nav>
        <template #mobiletitlebar>
            <div class="flex-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">{{ activeSection.title }}</div>
            <span v-if="user" class="cursor-pointer bg-gray-50 dark:bg-gray-900">
                <span class="sr-only">Your profile</span>
                <img class="h-8 w-8 rounded-full bg-gray-50 dark:bg-gray-900" :src="user.profileUrl" alt="">
            </span>
        </template>
    </sidebar-layout>
    <main class="lg:pl-72">
        <div v-if="init" class="px-4 sm:px-6 lg:px-8">
            <div v-if="!user">
                <sign-in @login="onLogin()"></sign-in>
                <!-- TODO: Remove auto login convenience button -->
                <div class="flex justify-center">
                    <div>
                        <div class="text-center text-sm font-semibold leading-6 text-gray-400 dark:text-gray-500">Quick Links</div>
                        <PrimaryButton href="/admin?user=admin@email.com&pass=p@55wOrd">signin admin@email.com</PrimaryButton>
                    </div>
                </div>
            </div>
            <div v-else>
                <h1 class="hidden lg:block pt-4 mb-2 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-50">{{ activeSection.title }}</h1>
                <component :key="refreshKey" :is="activeSection.component" @nav="navTo" :type="activeSection.type"></component>
            </div>            
        </div>
    </main>
</div>    
    `,
    setup() {
        
        const { typeOf } = useMetadata()

        const sections = {
            Dashboard: {
                icon: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
                component: {
                    template:`
                    <div>
                      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        <div v-for="stat in stats" @click="$emit('nav',stat.label)" class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 overflow-hidden rounded-lg bg-white dark:bg-gray-900 px-4 py-5 shadow sm:p-6">
                          <dt class="truncate text-sm font-medium text-gray-500 dark:text-gray-400">Total {{humanize(stat.label)}}</dt>
                          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">{{formatNumber(stat.total)}}</dd>
                        </div>
                      </dl>
                      <div class="mt-8 text-sm font-semibold leading-6">
                        <div class="flex gap-x-2">
                            <div class="mr-2">Go to <span aria-hidden="true">&rarr;</span></div>
                            <a href="/locode/" class="text-indigo-600 dark:text-indigo-300">Locode</a>    
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path></svg>                            
                            <a href="/admin-ui/" class="text-indigo-600 dark:text-indigo-300">Admin UI</a>
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path></svg>                            
                            <a href="/ui/" class="text-indigo-600 dark:text-indigo-300">API Explorer</a>
                        </div>
                      </div>
                    </div>`,
                    setup() {
                        const client = useClient()
                        const stats = ref([])
                        client.swr(new AdminData(), r => stats.value = r.response?.pageStats || [])
                        const formatNumber = value => new Intl.NumberFormat().format(value)
                        return { stats, humanize, formatNumber }
                    }
                },
            },
        }
        
        Object.keys(Sections).forEach(k => {
            const { group, items } = Sections[k]
            Object.keys(items).forEach(x => {
                sections[x] = items[x]
                sections[x].group = group
            });
        })
        
        function getIcon(id) {
            const section = sections[id]
            return section.icon  || typeOf(section.type)?.icon?.svg ||
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v6m0-6h6m12 0v6m0-6H9m12 6v4a2 2 0 0 1-2 2H9m12-6H9m-6 0v4a2 2 0 0 0 2 2h4m-6-6h6m0-6v6m0 0v6m6-12v12"></path></svg>`
        }
        Object.keys(sections).map(id => {
            const section = sections[id]
            section.id = id
            section.label = section.label || humanize(id)
            section.title = section.title || section.label
            section.icon  = getIcon(id)
            section.component.props = section.component.props || ['type']
            section.component.emits = section.component.emits || ['nav']
        })
        
        const { user, signIn } = useAuth()
        const client = useClient()
        const sidebar = ref()
        const refreshKey = ref(1)
        const showUserMenu = ref(false)
        const init = ref(false)
        const getSection = () => rightPart(leftPart(location.hash,'?'), '#')
        const activeSection = shallowRef(sections[getSection()] || sections.Dashboard)

        function navTo(section, args, pushState=true) {
            if (!args) args = {}
            refreshKey.value++
            activeSection.value = sections[section] || sections.Dashboard
            if (pushState) history.pushState({ section, ...args }, null, appendQueryString(`/admin#${section}`, args))
            sidebar.value.toggle(false)
        }
        
        function onLogin() {
            location.reload()
        }

        onMounted(async () => {
            console.log('onMounted')

            window.addEventListener('popstate', event => {
                console.log('popstate', event.state)
                navTo(event.state?.section || getSection(), {}, false)
            })
            
            // Auto Sign In ?user=...&pass=...
            if (location.search) {
                const q = queryString(location.search)
                if (q.user && q.pass) {
                    const api = await client.api(new Authenticate({
                        provider: 'credentials',
                        userName: q.user,
                        password: q.pass,
                    }))
                    if (api.succeeded) {
                        signIn(api.response)
                        location.href = leftPart(location.href, '?')
                    }
                }
            }

            if (!user.value) {
                const api = await client.api(new Authenticate())
                if (api.succeeded) {
                    signIn(api.response)
                }
            }
            init.value = true
        })

        return { init, sidebar, user, sections, activeSection, navTo, onLogin, refreshKey, showUserMenu }
    }
}
