importScripts('./edge-impulse-standalone.js');
importScripts('./run-impulse.js');

const dict = {
    "beautiful": "english",
    "colour": "english",
    "colours": "english",
    "painting": "english",
    "lepa": "slovenian",
    "slika": "slovenian",
    "poglej": "slovenian",
    "mira": "spanish",
    "hermoso": "spanish",
    "cuadro": "spanish"
};


onmessage = (e) => {
    preproc(e.data.data);
    //let intervalID = setInterval(classifier, 5000);
}

async function preproc(data){
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
        let view = new Int8Array(reader.result);
        classifier(view.toString());   
    });
    reader.readAsArrayBuffer(data);
}
async function classifier(data) {
    
    var classifier = new EdgeImpulseClassifier();
    await classifier.init();
    
    let features = data.split(',').map(x => Number(x.trim()));
    let res = classifier.classify(features);

    best = "";
    max = 0;
    res.results.forEach(element => {
        if (element.value >= max) {
            best = element.label;
            max = element.value;
        }
    });

    console.log(res.results[5]);
    //postMessage([dict[best]]);
}