import { createWebHistory, createRouter } from "vue-router";
import Books from "@/views/Book.vue";
import NotFound from "@/views/NotFound.vue";
import User from "@/views/User.vue";
import bookEdit from "@/views/bookEdit.vue";
import bookAdd from "@/views/bookAdd.vue";
import register from "@/views/register.vue";
const routes = [
    {
        path: "/user",
        name: "user",
        component: User,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
    {
        path: "/books",
        name: "books",
        component: Books,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: NotFound,
    },
    {
        path: "/books/:id",
        name: "book.edit",
        component: bookEdit,
        props: true 
    },
    {
        path: "/books/add",
        name: "book.add",
        component: bookAdd,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;