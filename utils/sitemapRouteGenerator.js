export default function () {
  this.nuxt.hook('generate:done', (context) => {
    const routesToExclude = [] // Add any route you don't want in your sitemap. Potentially get this from an .env file.
    const allRoutes = Array.from(context.generatedRoutes)
    const routes = allRoutes.filter(route => !routesToExclude.includes(route))
    console.log(routes)
    console.log(routes.length)
    for (let i = 0; i < routes.length; i++) {
      if (!routes[i].endsWith("/")) { routes[i] = routes[i] + "/" } else { routes[i] }
    }
    console.log(routes)

    this.nuxt.options.sitemap.routes = [...routes]
  })
}
