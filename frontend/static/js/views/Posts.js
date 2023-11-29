import { AbstractView } from "./AbstractView.js";

export class PostsView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    // this could be async so we can grab data from the server if we want
    getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts</p>
        `;
    }
}
