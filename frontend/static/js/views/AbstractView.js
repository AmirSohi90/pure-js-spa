export class AbstractView {
    constructor(){

    }

    setTitle(title){
        document.title = title;
    }

    getHtml(){
        return "";
    }
}