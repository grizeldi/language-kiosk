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

let votes = {
    "english": 0,
    "slovenian": 0,
    "spanish": 0
}

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

    // console.log(res.results);
    if (max >= 0.87 && best != "nothing") {
        console.log(best + " " + max);
        votes[dict[best]] += 1;
    } else {
        console.log("waiting on strong match");
    }

    if (votes[dict[best]] >= 2) {
        console.log("!! We speaking " + dict[best] + "!");
        postMessage(dict[best]);
        votes = {
            "english": 0,
            "slovenian": 0,
            "spanish": 0
        }
    }


}