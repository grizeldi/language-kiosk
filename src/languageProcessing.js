export class LanguageProcessing {
    constructor(){
        //Called when the app starts, add init code, spawn a web worker... here

        this.listeners = [];
    }

    notifyListeners(event){
        this.listeners.forEach((listener) => listener(event));
    }

    addListener(listener){
        if (!this.listeners.includes(listener))
            this.listeners.push(listener);
    }
}