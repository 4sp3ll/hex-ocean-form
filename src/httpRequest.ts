import axios from 'axios';
import { RootState } from './index'

const httpRequest = async (store: RootState) => {

    const postData = store.form.main.values
    console.log("postData", postData)
    console.log("postData", JSON.stringify(postData))

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
        }
    }

    try {
        const res = await axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', postData, axiosConfig)
        if (res.status === 200) { console.log(res.status) }
        return res.data
    } catch (err) {
        console.log("Nie mogę wysłać formularza: ", err)
    }
}

export default httpRequest;