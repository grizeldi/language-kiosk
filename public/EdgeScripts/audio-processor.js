
class AudioProcessor extends AudioWorkletProcessor { 
  
    constructor() {  
      super();
      this.chunk = [];
      this.chunkLength = 0;
      this.listeners = [];
    }
    
    process (inputs, outputs, parameters) {
      let T = 1/sampleRate;
      this.chunk.push(...inputs[0][0]);
      this.chunkLength += T*128;

      if(this.chunkLength > 1){
        this.port.postMessage(this.chunk);
        this.chunk = [];
        this.chunkLength = 0;
      }

      return true;
    }
  }
  
  registerProcessor('audio-processor', AudioProcessor)