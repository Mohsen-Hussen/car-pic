import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID unSeMW9lYDSVdUggqV60ElLeuJBck2zKMPje-TNMz_I'
    }
});