import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import { NonFoundPage } from "pages/NonFoundPage";
import React from "react";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NON_FOUND ='non_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NON_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.NON_FOUND]: {
        path: RoutePath.non_found,
        element: <NonFoundPage />
    },
}
