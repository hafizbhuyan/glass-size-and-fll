import axios from "axios";
import fs from "fs"
import { API_KEY } from './private.js'

const image = fs.readFileSync("./imgs/sample_2.jpg", {
    encoding: "base64"
});

axios({
    method: "POST",
    url: "https://detect.roboflow.com/glass-size-and-fill-amount/1",
    params: {
        api_key: API_KEY
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});