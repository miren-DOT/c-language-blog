import DefaultTheme from 'vitepress/theme'
import Admin from './components/admin.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Admin', Admin)
  }
}
