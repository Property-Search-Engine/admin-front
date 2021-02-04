import PropertiesTypes from "./properties-types";


/* export const resetStoreAndLogOut = () => ({
  type: UserTypes.RESET_STORE_AND_LOG_OUT,
});
 */
export const listPropertiesError = (message) =>  ({
    type: PropertiesTypes.LIST_PROPERTIES_ERROR,
    payload: message
});
export const listPropertiesRequest = () => {
    console.log(PropertiesTypes.LIST_PROPERTIES_REQUEST + ' Started');
    return { type: PropertiesTypes.LIST_PROPERTIES_REQUEST, }
};
export const listProperties = (filters= '', token= '') => {
    return async function listPropertiesThunk(dispatch){
        //We info and change state to have lastRequest as LIST_PROPERTIES
        dispatch(listPropertiesRequest());
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const list = await res.json();
           /*  const myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + token);
            const list = await fetch('', {
                headers: myHeaders,
              }); */
            dispatch({ 
                type: PropertiesTypes.LIST_PROPERTIES_SUCCESS,
                payload: list
            });
        } catch (error) {
            dispatch(listPropertiesError(error.message))
        }
    }
};




