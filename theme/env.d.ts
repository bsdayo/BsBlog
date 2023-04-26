declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@waline/client/component' {
  export const Waline: DefineComponent<{}, {}, any>
}
