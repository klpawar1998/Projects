import axios from "axios";

export const loginUser = async ({ email, password }) => {
    const response = await axios.post('http://localhost:8093/users/login', JSON.stringify({ email, password }), {
        headers: { "Content-Type": "application/json" }
    });
    const data = response.data;
    if (response.status !== 200) {

        const error = new Error("Failed to login");
        if (data.message == "Email not registered") {
            error.props = {
                email: "Email not registered",
            };
        } else if (data.message == "Invalid credentials") {
            error.props = {
                email: "Invalid credentials",
                password: "Invalid credentials",
            };
        }
        throw error;
    }

    return {
        token: data.token,
        user: {
            userId: data.userId,
            userName: data.userName,
            token: data.token,
        },
    };
};




export const registerUser = async ({ username, email, password }) => {
    try {
        const response = await axios.post('http://localhost:8093/users/register', JSON.stringify({ email, password, userName: username }), {
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.status == 201) {
            console.log("token: " + response.data.token);
            return {
                token: response.data.token,
                user: {
                    userId: response.data.userId,
                    userName: response.data.userName,
                    token: response.data.token,
                },
            };
        }
    } catch (error) {
        const error1 = new Error("Email registered");
        if (error.message === "Email already registered") {
            error.props = {
                email: "Email already registered",
            };
        }
        return error;
    }
}