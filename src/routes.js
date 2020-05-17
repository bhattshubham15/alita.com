import HomeComponent from "./components/home/home.component";
import AboutUsComponent from "./components/aboutus/about.component";
import ContactUsComponent from "./components/contactus/contactus.component";
import NotFoundComponent from "./components/notfound/notfound.component";

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomeComponent
    },
    {
        path: '/about',
        component: AboutUsComponent
    },
    {
        path: '/contact',
        component: ContactUsComponent
    },
    {
        path: '*',
        component: NotFoundComponent
    }
];