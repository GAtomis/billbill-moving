module.exports = [
    // user login
    {
        url: "/mock/user/login",
        type: "post",
        response: config => {
            const { username } = config.body;
            const token = tokens[username];

            // mock error
            if (!token) {
                return {
                    code: 60204,
                    message: "Account and password are incorrect."
                };
            }

            return {
                code: 20000,
                data: token
            };
        }
    },

    // get user info
    {
        url: "/vue-admin-template/user/info.*",
        type: "get",
        response: config => {
            const { token } = config.query;
            const info = users[token];

            // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: "Login failed, unable to get user details."
                };
            }

            return {
                code: 20000,
                data: info
            };
        }
    },

    // user logout
    {
        url: "/vue-admin-template/user/logout",
        type: "post",
        response: _ => {
            return {
                code: 20000,
                data: "success"
            };
        }
    }
];