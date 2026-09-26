import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="not-found"><div><h1>404</h1><h2>Page not found</h2><p>The page you're looking for doesn't exist or has been moved.</p><Link to="/" className="blue-button">Go home</Link></div></div>;}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){console.error(error);const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"aries_root_error_component"});},[error]);return <div className="not-found"><div><h2>This page didn't load</h2><p>Something went wrong. Try refreshing or head back home.</p><button className="blue-button" onClick={()=>{router.invalidate();reset();}}>Try again</button></div></div>;}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Arise — Design That Powers Real Business Growth"},{name:"description",content:"Premium creative agency frontend inspired by the Arise UI reference."},{name:"theme-color",content:"#02030d"}],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>;}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>;}
