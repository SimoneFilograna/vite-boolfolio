import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import ProjectsPage from "./pages/projects/Projects.vue";
import ProjectShow from "./pages/projects/ProjectShow.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import Contacts from "./pages/Contacts.vue"

const routes = [
    {
        path: "/",
        name: "homepage",
        component: Homepage
    },
    {
        path: "/projects",
        name: "projects",
        component: ProjectsPage,
    },
    {
        path: "/projects/:slug",
        name: "project.show",
        component: ProjectShow
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts
    },
    {
        path: "/:pathMatch(.*)*",
        name: "error-found",
        component: ErrorPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };