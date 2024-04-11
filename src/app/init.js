import axios from "axios"

const initializeApp = () => {
    
    // setting base url per api calls
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL


    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code



    } else {
        // prod build



        // Removing console.log from prod
        console.log = () => {};


        // init analytics here
    }

}

export default initializeApp