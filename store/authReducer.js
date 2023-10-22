import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    authState: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: 
            return {...state, ...action.payload};
        case 'AUTH':
            return {...state, authState: action.payload};
        default:
            return state;
    }
}

export default reducer; 