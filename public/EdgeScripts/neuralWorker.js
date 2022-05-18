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
    classify(e.data);
}


async function classify(data) {
    data = data.map(function(x){return Math.round(x*32767)});
    
    const classifier = new EdgeImpulseClassifier();
    await classifier.init();
    //let features = data.split(',').map(x => Number(x.trim()));
    const res = classifier.classify(data);
    
    let best = "";
    let max = 0;
    res.results.forEach(element => {
        if (element.value >= max) {
            best = element.label;
            max = element.value;
        }
    });

    // console.log(res.results);
    console.log(best + " " + max);
    //postMessage([dict[best]]);
}