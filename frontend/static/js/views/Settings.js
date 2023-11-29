import { AbstractView } from "./AbstractView.js";

export class SettingsView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    // this could be async so we can grab data from the server if we want
    getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configurations</p>
        `;
    }
}
