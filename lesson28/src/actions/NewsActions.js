const NewsActions = {
    fetchNews() {
        return dispatch => {
            dispatch({ type: "NEWS_GET_PENDING" });

            setTimeout(() => {
                if (Math.random() > 0.5) {
                    dispatch({
                        type: "NEWS_GET_FULFILLED",
                        payload: [
                            { title: "Some title", text: "text text text..." },
                            { title: "Another title", text: "text?" }
                        ]
                    });
                } else {
                    dispatch({
                        type: "NEWS_GET_ERROR",
                        payload: {
                            code: 401,
                            message: "Not allowed"
                        }
                    });
                }
            }, 3000);
        };
    }
};

export default NewsActions;