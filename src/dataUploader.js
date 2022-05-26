import axios from "axios"
import { API_KEY } from "./env";

const encodeLanguage = function (event) {
    switch (event.language) {
        case "english":
            return 0;
        case "slovenian":
            return 1;
        case "spanish":
            return 2;
    }
}

export const uploadLanguage = function (event) {
    axios.get("https://api.thingspeak.com/update?api_key=" + API_KEY + "&field1=" + encodeLanguage(event))
        .then((response) => {
            if (response.status !== 200)
                console.log(response);
        }).catch((error) => {
            console.log(error);
        });
}