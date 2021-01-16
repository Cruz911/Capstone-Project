import axios from 'axios';

const URL = "http://localhost:8100"

class SignUpSubmit{

    signingUp = (data) =>{
        axios.post(`${URL}/save`, data);
    }
}

export default new SignUpSubmit();