import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        
        url : "",
        isLoggedIn : false,
    },
    actions: {
        setUrl({state}, addr) {
            state.url = addr
        },
        changeLoginStatus({state}){
            state.isLoggedIn = !state.isLoggedIn
        }
    }
});