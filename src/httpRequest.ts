import axios from 'axios';
import { RootState } from './index'

const httpRequest = async (store: RootState) => {

    const postData = store.form.main.values

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
        return res
    } catch (err) {
        console.log("I can't send request to frosty-wood: ", err)
    }
}

export default httpRequest;