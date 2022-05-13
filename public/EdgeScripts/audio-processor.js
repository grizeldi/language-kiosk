class AudioProcessor extends AudioWorkletProcessor { 
    constructor() {
      super();
      this.chunk = 0;
      this.listeners = [];
    }
    
    process (inputs, outputs, parameters) {
      if(this.chunk % 1000 == 0){
        console.log(inputs[0][0]);
        this.port.postMessage('slovenian')
      }
      this.chunk += 1;
      return true;
    }
  }
  
  registerProcessor('audio-processor', AudioProcessor)