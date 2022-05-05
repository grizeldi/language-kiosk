export class LanguageProcessing {
    constructor() {
        //Called when the app starts, add init code, spawn a web worker... here
        this.listeners = [];
        
        let worker = new Worker('./EdgeScripts/neuralWorker.js');
        worker.onmessage = (event) => {
            this.notifyListeners({ language: event.data[0] });
        };
        worker.postMessage({});
    }

    notifyListeners(event) {
        this.listeners.forEach((listener) => listener(event));
    }

    addListener(listener) {
        if (!this.listeners.includes(listener))
            this.listeners.push(listener);
    }
}

