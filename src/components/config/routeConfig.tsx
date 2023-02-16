import {RouteProps} from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";

export enum AppRoute {
    HOME = 'home',
    ABOUT = 'about',
    CONTACT = 'contact'
}


export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.HOME]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.CONTACT]: '/contact'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.HOME]: {
        path: RoutePath.home,
        element: <Home/>
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <About/>
    },
    [AppRoute.CONTACT]: {
        path: RoutePath.contact,
        element: <Contact/>
    },
}
