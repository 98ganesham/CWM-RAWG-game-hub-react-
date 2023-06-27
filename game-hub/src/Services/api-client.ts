 import axios from "axios";
export default axios.create ({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'a80cca7404214a4196c4a2c6ed7f309e'
    }
})