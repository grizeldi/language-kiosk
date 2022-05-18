class AudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.chunk = [];
    this.timer = 0;
    this.listeners = [];

    // Constants
    this.chunkSize = sampleRate; // How many samples do we want in the buffer
    this.windowLength = 0.5; // How many seconds need to pass between 2 classification attempts.
  }

  process(inputs, outputs, parameters) {
    let T = 1 / sampleRate;
    this.addToChunk(inputs[0][0]);
    this.timer += T * inputs[0][0].length;

    if (this.timer > this.windowLength) {
      this.port.postMessage(this.chunk);
      this.timer = 0;
    }

    return true;
  }

  addToChunk(data) {
    this.chunk.push(...data);
    if (this.chunk.length > this.chunkSize){
      this.chunk.splice(0, this.chunk.length - this.chunkSize);
    }
  }
}

registerProcessor('audio-processor', AudioProcessor);