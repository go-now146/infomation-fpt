import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import TopNews from "../pages/Top News";

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/topnews', component: TopNews},
    { path: '/contact', component: Contact},
    { path: '/detail/:id', component: Detail}
]

const privateRoutes = [
    { path: '/dashboard', component: Dashboard}
]

export { publicRoutes, privateRoutes}