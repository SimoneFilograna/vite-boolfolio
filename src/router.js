import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import ProjectsPage from "./pages/projects/Projects.vue";
import ProjectShow from "./pages/projects/ProjectShow.vue";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: Homepage
    },
    {
        path: "/projects/projects",
        name: "projects",
        component: ProjectsPage,
    },
    {
        path: "/projects/:slug",
        name: "project.show",
        component: ProjectShow
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };