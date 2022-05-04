export class LanguageProcessing {
    constructor() {
        //Called when the app starts, add init code, spawn a web worker... here
        var worker = new Worker('./EdgeScripts/neuralWorker.js')
        worker.postMessage({});
        this.listeners = [];

        worker.onmessage = (event) => {
            console.log(event.data);
            this.notifyListeners({ language: "slovenian" });
        }
    }

    notifyListeners(event) {
        this.listeners.forEach((listener) => listener(event));
    }

    addListener(listener) {
        if (!this.listeners.includes(listener))
            this.listeners.push(listener);
    }
}

