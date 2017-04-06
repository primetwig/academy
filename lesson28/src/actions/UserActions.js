const UserActions = {
    userLoggedIn() {
        return {
            type: "USER_LOGGED",
            payload: {
                name:  "Andy",
                token: "T28H0TA7SR9"
            }
        };
    },
    userLoggedOut() {
        return {
            type: "USER_LOGGED_OUT"
        };
    }
};

export default UserActions;