export class LanguageProcessing {
    
    constructor() {
        //Called when the app starts, add init code, spawn a web worker... here
        this.listeners = [];
        
        let worker = new Worker('./EdgeScripts/neuralWorker.js');
        worker.onmessage = (event) => {
            this.notifyListeners({ language: event.data[0] });
        };


        if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
            console.log("getUserMedia not supported");
            console.log(!navigator.mediaDevices.getUserMedia);
            return
        }

        navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start(500);

            mediaRecorder.ondataavailable = function(e) {
                worker.postMessage({data: e.data});
            }

        })
        .catch(err=> {
            console.log("ERR: getUserMedia returned the following error: " + err);
        });

        
    }

    notifyListeners(event) {
        this.listeners.forEach((listener) => listener(event));
    }

    addListener(listener) {
        if (!this.listeners.includes(listener))
            this.listeners.push(listener);
    }
}

