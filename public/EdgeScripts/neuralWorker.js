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

let votes = 0;
let currentLang = "";

onmessage = (e) => {
    classify(e.data);
}


async function classify(data) {
    data = data.map(function (x) { return Math.round(x * 32767) });

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

    
    
    
    if (max >= 0.98 && best != "nothing" && best!="random") {
        if(dict[best] != currentLang){
            votes = 0;
        }
        console.log(best + " " + max);
        votes += 1;
        currentLang = dict[best];
    } else {
        console.log("waiting on strong match");
    }

    if (votes >= 3) {
        console.log("!! We speaking " + currentLang + "!");
        postMessage(currentLang);
        votes = 0;
    }
}