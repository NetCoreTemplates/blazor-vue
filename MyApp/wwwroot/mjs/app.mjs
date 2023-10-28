import { createApp, reactive, ref, computed } from "vue"
import { JsonApiClient, $1, $$ } from "@servicestack/client"
import ServiceStackVue from "@servicestack/vue"
import HelloApi from "./components/HelloApi.mjs"
import GettingStarted from "./components/GettingStarted.mjs"

let client = null, Apps = []
let AppData = {
    init:false
}
export { client, Apps }

/** Shared Components */
const Components = {
    HelloApi,
    GettingStarted,
}

const alreadyMounted = el => el.__vue_app__ 

/** Mount Vue3 Component
 * @param sel {string|Element} - Element or Selector where component should be mounted
 * @param component 
 * @param [props] {any} */
export function mount(sel, component, props) {
    if (!AppData.init) {
        init(globalThis)
    }
    const el = $1(sel)
    if (!el || alreadyMounted(el)) return
    const app = createApp(component, props)
    app.provide('client', client)
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name])
    })
    app.use(ServiceStackVue)
    app.component('RouterLink', ServiceStackVue.component('RouterLink'))
    app.mount(el)
    Apps.push(app)
    return app
}

async function mountApp(el) {
    let appPath = el.getAttribute('data-component')
    if (!appPath.startsWith('/')) {
        appPath = `../${appPath}`
    }

    const props = JSON.parse(el.getAttribute('data-props') ?? 'null')
    const module = await import(appPath)
    unmount(el)
    //console.log('vue-app', el.id, appPath, module, props)
    mount(el, module.default, props)
}

export async function remount() {
    if (!AppData.init) {
        init({ force: true })
    } else {
        mountAll({ force: true })
    }
}

export function mountAll(opt) {
    $$('[data-component]').forEach(el => {

        if (opt && opt.force) {
            unmount(el)
        } else {
            if (alreadyMounted(el)) return
        }

        let componentName = el.getAttribute('data-component')
        if (componentName.includes('.')) {
            mountApp(el)
            return
        }

        if (!componentName) return
        let component = Components[componentName] || ServiceStackVue.component(componentName)
        if (!component) {
            console.error(`Component ${componentName} does not exist`)
            return
        }

        let propsStr = el.getAttribute('data-props')
        let props = propsStr && new Function(`return (${propsStr})`)() || {}
        mount(el, component, props)
    })
}

/** @param {any} [exports] */
export function init(opt) {
    if (AppData.init) return
    client = JsonApiClient.create()
    AppData = reactive(AppData)
    AppData.init = true
    mountAll(opt)

    if (opt && opt.exports) {
        opt.exports.client = client
        opt.exports.Apps = Apps
    }
}

function unmount(el) {
    if (!el) return

    try {
        if (el.__vue_app__) {
            el.__vue_app__.unmount(el)
        }
    } catch (e) {
        console.log('force unmount', el.id)
        el._vnode = el.__vue_app__ = undefined
    }
}

document.addEventListener('DOMContentLoaded', () =>
    Blazor.addEventListener('enhancedload', remount))
