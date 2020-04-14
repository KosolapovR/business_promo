import {
    CHANGE_PAGE,
    FETCH_DATA
} from "./types";
import {END_FETCHING, START_FETCHING} from "../authors/types";

const initialState = {
    isFetching: false,
    currentPage: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                widgetData: action.payload.items,
                currentPage: action.payload.currentPage,
                pageCount: action.payload.pageCount
            }
        }
        case CHANGE_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case START_FETCHING: {
            return {...state, isFetching: true}
        }
        case END_FETCHING: {
            return {...state, isFetching: false}
        }
        default: {
            return state
        }
    }
};

export default reducer;