import { createStore } from "redux";

const store = createStore(function(state, action){
    if(action.type === "SIDEBAR-DISABLED"){
        return {
            ...state,
            Sidebar: {
                sidebar : "sidebar-tab  turn-on", 
                main: "main active"
            } 
        }
    }
    else if (action.type === "SIDEBAR-ACTIVE"){
        return {
            ...state,
            Sidebar: {
                sidebar : "sidebar-tab", 
                main: "main"
            } 
        }
    }
    return state
}, {
    Sidebar: {
        sidebar : "sidebar-tab  turn-on", 
        main: "main active"
    }
})
export default store