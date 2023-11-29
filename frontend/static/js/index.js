import {Dashboard} from "./views/Dashboard.js";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Dashboard},
        // {path: "/posts", view: () => console.log('viewing posts')},
        // {path: "/settings", view: () => console.log('viewing settings')},
    ];

    //test each route for potential route

    const potentialMatches = routes.map(route => ({
        route: route,
        isMatch: location.pathname === route.path
    }));

    
    const match = potentialMatches.find(({isMatch}) => isMatch) || {route: routes[0], isMatch: true};
   
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});