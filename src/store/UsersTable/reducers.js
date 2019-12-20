import {
    USERSTABLE_LOAD_USERS,
    USERTABLE_CHANGE_SORTCOLUMN,
    USERTABLE_FILTER_USERS,
    USERTABLE_CHANGE_CURRENTPAGE
    // USERTABLE_CHANGE_SORTWAY,

} from "./actions";

const defaultState = {
    users: [],
    isLoading: true,
    search: '',
    sortway: 'asc',
    sortcolumn: "name",
    countUsersPerPage: 30,
    currentpage: '0'
}



export const userstableReducer = (state = defaultState, action) => {

        switch(action.type) {
            case USERSTABLE_LOAD_USERS:
                return {
                    ...state,
                    users: action.payload,
                    isLoading: false
                }
            case USERTABLE_FILTER_USERS:
                return {
                    ...state,
                    search: action.payload,
                    currentpage: 0
                    // users: filteredUsers()
                }
/*            case USERTABLE_CHANGE_SORTWAY:
                return {
                    ...state,
                    sortway: state.sortway === "asc" ? "desc" : "asc"
                }*/
            case USERTABLE_CHANGE_SORTCOLUMN:
                return {
                    ...state,
                    sortcolumn: action.payload,
                    sortway: state.sortway === "asc" ? "desc" : "asc"
                }
            case USERTABLE_CHANGE_CURRENTPAGE:
                return {
                    ...state,
                    currentpage: action.payload,
                }
            default: return state
        }

}

