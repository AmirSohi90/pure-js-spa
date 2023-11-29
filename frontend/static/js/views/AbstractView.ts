type Props = {
    params: {[key: string]: string}
}

export class AbstractView {
    params: {[key: string]: string}
    
    constructor({params}: Props) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    getHtml() {
        return "";
    }
}
