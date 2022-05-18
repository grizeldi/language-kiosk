export class LanguageProcessing {
    
    constructor() {
        //Called when the app starts, add init code, spawn a web worker... here
        this.listeners = [];
        this.classifierWorker = new Worker("EdgeScripts/neuralWorker.js");
        
        //Dis ugly
        //Browser doesn't allow audio recording before user interacts with site
        setTimeout(() => {  this.run(); }, 5000);
    }

    async run(){
        try{
            const audioContext = new AudioContext({"sampleRate": 16000});
            await audioContext.audioWorklet.addModule('EdgeScripts/audio-processor.js');
            navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(stream => {
                let microphone = audioContext.createMediaStreamSource(stream);
                const audioNode = new AudioWorkletNode(audioContext, 'audio-processor');
                microphone.connect(audioNode).connect(audioContext.destination);
                audioNode.port.onmessage = (e) => this.classifierWorker.postMessage(e.data);
            });
        }catch(e){
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

