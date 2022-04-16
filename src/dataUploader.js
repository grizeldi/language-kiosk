import axios from "axios"
import { API_KEY } from "./env";

export const onLanguageChange = function(event){
    axios.get("https://api.thingspeak.com/update.json", {
            api_key: API_KEY,
            field0: "english"
        })
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
}