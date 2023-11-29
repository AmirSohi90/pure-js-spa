import { AbstractView } from "./AbstractView.js";

export class PostView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing post");
    }

    // this could be async so we can grab data from the server if we want
    getHtml() {
        console.log(this.params.id);
        return `
        <h1>Post</h1>
        <p>You are viewing the post</p>
        `;
    }
}
