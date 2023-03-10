// Plugins
import vuetify from './vuetify'
import router from '../router'
export function registerPlugins(app:any) {
  console.log(app);
  
  // loadFonts()
  app.use(vuetify).use(router)
}
