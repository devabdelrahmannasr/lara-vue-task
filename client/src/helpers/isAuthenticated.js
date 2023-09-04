import store from '../store'
function isAuthenticated() {

    const authToken = store.state.auth.authToken; 
    console.log(authToken);
    return authToken && authToken !== '';
}

export default isAuthenticated