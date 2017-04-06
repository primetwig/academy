const initialState = {
    isLoading: false,
    isError:   false,
    error:     null,
    data:      null
};

const userReducer = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'USER_LOGGED':
            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: false
            };
        case 'USER_LOGGED_OUT':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: false
            };
        default:
            return state;
    }
};

export default userReducer;