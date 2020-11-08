export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const BASE_URL = 'http://192.168.13.166:3000';

export const registerUser = (authData) => {
    const {fullName, email, password} = authData;

    return async dispatch => {

        //logic to make POST request to register
        fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                fullName,
                email,
                password
            })
        })

        const resultData = result.json();
        console.log(resultData);

        diapath({
            type:REGISTER_USER_SUCCESS,
            payload: 1
        });
    }
}
export const loginUser = (authData) => {
    const {email, password} = authData;

    return async dispatch => {

        //logic to make POST request to login

        diapath({
            type:LOGIN_USER_SUCCESS,
            payload: 1
        });
    }
}