import axios from 'axios';

const URL = "http://localhost:8100/"

class SignInSubmit{

    signingIn = () =>{
        axios.post(`${URL}/signin`, data);
    }
}

export default new SignInSubmit();