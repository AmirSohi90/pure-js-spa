import { DashboardView } from "./views/Dashboard.js";
import { PostView } from "./views/Post.js";
import { PostsView } from "./views/Posts.js";
import { SettingsView } from "./views/Settings.js";

type Match = {
    route: {
        path: string;
        view: typeof DashboardView | typeof PostsView | typeof PostView | typeof SettingsView;
    };
    result: RegExpMatchArray | null;
}

function pathToRegex(path) {
    return new RegExp(
        "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
    );
}

function getParams(match: Match) {
    const values = match.result?.slice(1) || [];
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
        (result) => result[1]
    );

    return Object.fromEntries(
        keys.map((key, i) => {
            return [key, values[i]];
        })
    );
}

const navigateTo = (url) => {
    history.pushState(null, "", url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: DashboardView },
        { path: "/posts", view: PostsView },
        { path: "/posts/:id", view: PostView },
        { path: "/settings", view: SettingsView },
    ];

    //test each route for potential route

    const potentialMatches = routes.map((route) => ({
        route: route,
        result: location.pathname.match(pathToRegex(route.path)),
    }));

    const match = potentialMatches.find(({ result }) => result !== null) || {
        route: routes[0],
        result: [location.pathname],
    };

    const params = getParams(match);
    console.log({ params });

    const view = new match.route.view(params);
    console.log(view);

    const appElement = document.querySelector("#app");

    if (appElement !== null) {
        appElement.innerHTML = await view.getHtml();
    }
};

window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e: MouseEvent) => {
        if (e.target instanceof Element && e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo((e.target as HTMLAnchorElement).href);
        }
    });
    router();
});
