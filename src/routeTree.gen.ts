/* eslint-disable */

// @ts-nocheck

// This file is generated from the file-based routes in src/routes.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as WorksRouteImport } from './routes/works'
import { Route as BlogsRouteImport } from './routes/blogs'
import { Route as TimelineRouteImport } from './routes/timeline'
import { Route as WaitlistRouteImport } from './routes/waitlist'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ToolsRouteImport } from './routes/tools'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as PricingRouteImport } from './routes/pricing'

const IndexRoute=IndexRouteImport.update({id:'/',path:'/',getParentRoute:()=>rootRouteImport} as any)
const WorksRoute=WorksRouteImport.update({id:'/works',path:'/works',getParentRoute:()=>rootRouteImport} as any)
const BlogsRoute=BlogsRouteImport.update({id:'/blogs',path:'/blogs',getParentRoute:()=>rootRouteImport} as any)
const TimelineRoute=TimelineRouteImport.update({id:'/timeline',path:'/timeline',getParentRoute:()=>rootRouteImport} as any)
const WaitlistRoute=WaitlistRouteImport.update({id:'/waitlist',path:'/waitlist',getParentRoute:()=>rootRouteImport} as any)
const AboutRoute=AboutRouteImport.update({id:'/about',path:'/about',getParentRoute:()=>rootRouteImport} as any)
const ToolsRoute=ToolsRouteImport.update({id:'/tools',path:'/tools',getParentRoute:()=>rootRouteImport} as any)
const ServicesRoute=ServicesRouteImport.update({id:'/services',path:'/services',getParentRoute:()=>rootRouteImport} as any)
const PricingRoute=PricingRouteImport.update({id:'/pricing',path:'/pricing',getParentRoute:()=>rootRouteImport} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/works': typeof WorksRoute
  '/blogs': typeof BlogsRoute
  '/timeline': typeof TimelineRoute
  '/waitlist': typeof WaitlistRoute
  '/about': typeof AboutRoute
  '/tools': typeof ToolsRoute
  '/services': typeof ServicesRoute
  '/pricing': typeof PricingRoute
}
export interface FileRoutesByTo extends FileRoutesByFullPath {}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/works': typeof WorksRoute
  '/blogs': typeof BlogsRoute
  '/timeline': typeof TimelineRoute
  '/waitlist': typeof WaitlistRoute
  '/about': typeof AboutRoute
  '/tools': typeof ToolsRoute
  '/services': typeof ServicesRoute
  '/pricing': typeof PricingRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/works' | '/blogs' | '/timeline' | '/waitlist' | '/about' | '/tools' | '/services' | '/pricing'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/works' | '/blogs' | '/timeline' | '/waitlist' | '/about' | '/tools' | '/services' | '/pricing'
  id: '__root__' | '/' | '/works' | '/blogs' | '/timeline' | '/waitlist' | '/about' | '/tools' | '/services' | '/pricing'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WorksRoute: typeof WorksRoute
  BlogsRoute: typeof BlogsRoute
  TimelineRoute: typeof TimelineRoute
  WaitlistRoute: typeof WaitlistRoute
  AboutRoute: typeof AboutRoute
  ToolsRoute: typeof ToolsRoute
  ServicesRoute: typeof ServicesRoute
  PricingRoute: typeof PricingRoute
}
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id:'/'; path:'/'; fullPath:'/'; preLoaderRoute:typeof IndexRouteImport; parentRoute:typeof rootRouteImport }
    '/works': { id:'/works'; path:'/works'; fullPath:'/works'; preLoaderRoute:typeof WorksRouteImport; parentRoute:typeof rootRouteImport }
    '/blogs': { id:'/blogs'; path:'/blogs'; fullPath:'/blogs'; preLoaderRoute:typeof BlogsRouteImport; parentRoute:typeof rootRouteImport }
    '/timeline': { id:'/timeline'; path:'/timeline'; fullPath:'/timeline'; preLoaderRoute:typeof TimelineRouteImport; parentRoute:typeof rootRouteImport }
    '/waitlist': { id:'/waitlist'; path:'/waitlist'; fullPath:'/waitlist'; preLoaderRoute:typeof WaitlistRouteImport; parentRoute:typeof rootRouteImport }
    '/about': { id:'/about'; path:'/about'; fullPath:'/about'; preLoaderRoute:typeof AboutRouteImport; parentRoute:typeof rootRouteImport }
    '/tools': { id:'/tools'; path:'/tools'; fullPath:'/tools'; preLoaderRoute:typeof ToolsRouteImport; parentRoute:typeof rootRouteImport }
    '/services': { id:'/services'; path:'/services'; fullPath:'/services'; preLoaderRoute:typeof ServicesRouteImport; parentRoute:typeof rootRouteImport }
    '/pricing': { id:'/pricing'; path:'/pricing'; fullPath:'/pricing'; preLoaderRoute:typeof PricingRouteImport; parentRoute:typeof rootRouteImport }
  }
}
const rootRouteChildren:RootRouteChildren={
  IndexRoute,WorksRoute,BlogsRoute,TimelineRoute,WaitlistRoute,AboutRoute,ToolsRoute,ServicesRoute,PricingRoute
}
export const routeTree=rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr:true
    router:Awaited<ReturnType<typeof getRouter>>
    config:Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
