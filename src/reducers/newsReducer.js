import {NEWS_API_FETCH} from '../actions/actionType';

export const newsReducer=(state={},action)=>{
    switch(action.type){
        case NEWS_API_FETCH:
            return{
                ...state,
                newsItems:action.news
            }
            default:
                return state;
    }
}