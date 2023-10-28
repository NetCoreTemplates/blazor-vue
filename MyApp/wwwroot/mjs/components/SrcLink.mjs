import { lastRightPart } from "@servicestack/client"

export default {
    template:/*html*/`<a v-if="iconSrc" :href="href" class="mr-3 text-gray-500 hover:text-gray-600 text-decoration-none">
        <img :src="iconSrc" class="w-5 h-5 inline-flex text-purple-800 mr-1" alt="file icon">{{ fileName }}</a>
        <a v-else :href="href" class="mr-3 text-gray-400 hover:text-gray-500 text-decoration-none">
            <svg v-if="fileName.endsWith('js')" class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"/></svg>
            <svg v-else-if="fileName.endsWith('.html')" class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"/><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5.75l-2.5-.75l-.1-.5"/></g></svg>
            <svg v-else-if="fileName.endsWith('.cshtml')" class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M23.844 27.692a16.332 16.332 0 0 1-6.645 1.3q-6.364 0-10.013-3.243a11.3 11.3 0 0 1-3.649-8.9a13.716 13.716 0 0 1 3.785-9.898A12.716 12.716 0 0 1 16.9 3.008a11.676 11.676 0 0 1 8.425 3.006a9.994 9.994 0 0 1 3.142 7.533a10.187 10.187 0 0 1-2.318 7.114a7.532 7.532 0 0 1-5.817 2.547a2.613 2.613 0 0 1-1.845-.642a2.323 2.323 0 0 1-.764-1.6a4.9 4.9 0 0 1-4.148 2.243a4.6 4.6 0 0 1-3.507-1.479a5.706 5.706 0 0 1-1.384-4.063a9.913 9.913 0 0 1 2.2-6.357q2.2-2.763 4.8-2.763a5.063 5.063 0 0 1 4.256 1.716l.311-1.338h2.405l-2.081 9.08a10.716 10.716 0 0 0-.352 2.243q0 .972.744.972a4.819 4.819 0 0 0 3.877-2.047a8.93 8.93 0 0 0 1.621-5.681a7.98 7.98 0 0 0-2.675-6.175a9.887 9.887 0 0 0-6.919-2.432a10.6 10.6 0 0 0-8.158 3.467a12.066 12.066 0 0 0-3.2 8.495a9.561 9.561 0 0 0 3.06 7.573q3.06 2.7 8.586 2.7a13.757 13.757 0 0 0 5.675-1.054ZM19.466 12.25a3.977 3.977 0 0 0-3.6-1.716q-1.824 0-3.263 2.23a8.726 8.726 0 0 0-1.439 4.824q0 3.635 2.905 3.635a3.771 3.771 0 0 0 2.651-1.183a6.309 6.309 0 0 0 1.7-3.2Z"/></svg>
            <svg v-else class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4Z"/></svg> 
            {{ fileName }}
        </a>`,
    props: ['href','iconSrc'],
    setup(props) {
        const fileName = lastRightPart(props.href, '/')
        return { fileName }
    }
}
