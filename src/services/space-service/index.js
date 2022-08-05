const backendUrl="https://dtuspacebackend.herokuapp.com/"

export const getResults=()=>{
    return fetch(backendUrl+"api/space");
}