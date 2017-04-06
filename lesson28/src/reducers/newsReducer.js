const initialState = {
    isLoading: false,
    isError:   false,
    error:     null,
    data:      null
};

const newsReducer = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'NEWS_GET_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'NEWS_GET_FULFILLED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: false
            };
        case 'NEWS_GET_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: payload
            };
        default:
            return state;
    }
};

export default newsReducer;