import { AbstractView } from "./AbstractView.js";

export class DashboardView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    // this could be async so we can grab data from the server if we want
    getHtml() {
        return `
            <h1>Welcome back, Amir</h1>
            <p>JIAOWSJRAOI AJISOJIOAJIOAIA AJIOFJASF</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}
