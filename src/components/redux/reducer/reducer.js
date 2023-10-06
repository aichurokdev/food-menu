import { GET_FOOD_NAME, GET_IMAGE } from "../actionTypes"

const initialState={
    menu:[],
    order:[]
}

export const Reducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_IMAGE:
            const savingToMenu=action.payload
            const menuIndex =state.menu.findIndex(
                (saving)=>saving.id===savingToMenu.id
            )
            if(menuIndex!==-1){
                const updatedMenu=[...state.menu]
                updatedMenu[menuIndex].quantity+=1
            return{
                ...state, 
                menu:updatedMenu
            };
            }
            else{
                const updatedMenu =[...state.menu, {...savingToMenu, quantity:1}]
            
            return{
                ...state, 
                menu:updatedMenu
            };
        }
            
            
        case GET_FOOD_NAME:
            return{...state, menu:action.payload};
            
    }
}