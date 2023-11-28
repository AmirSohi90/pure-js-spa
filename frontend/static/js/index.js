console.log("JS is loaded")

const router = async () => {
    const routes = [
        {path: "/", view: () => console.log('viewing dashboard')},
        {path: "/posts", view: () => console.log('viewing posts')},
        {path: "/settings", view: () => console.log('viewing settings')},
    ]

    //test each route for potential route

    const potentialMatches = routes.map(route => ({
        route: route,
        isMatch: location.pathname === route.path
    }))

    
    const match = potentialMatches.find(({isMatch}) => isMatch) || {route: routes[0], isMatch: true}
    console.log({match});
};

document.addEventListener('DOMContentLoaded', () => {
    router();
})