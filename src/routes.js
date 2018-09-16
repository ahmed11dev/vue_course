import homePage from "./components/homePage"
import aboutUsPage from "./components/aboutUsPage"
import postPage from "./components/postPage"
import usersPage from "./components/usersPage"
import usersHome from "./components/users/usersHome"
import usersViewPage from "./components/users/usersViewPage"

const routes = [
    { path: "/", component: homePage ,name:"home"},
    { path: "/about", component: aboutUsPage  },
    { path: "/post/:id", component: postPage,props:true  },
    { path: "/users", component: usersPage, children:[
            {path:"",component:usersHome},
        { path: ":id", component: usersViewPage, props: true, name: "single-user"}
    ] },
    { path: "*", redirect:"/"}
];
export default routes;