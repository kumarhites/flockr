import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const localStorageToken = JSON.parse(localStorage.getItem("currentUser"));
    const [token, setToken] = useState(localStorageToken?.token || "");
    const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
    const navigate = useNavigate();
    const location = useLocation();

    const loginHandler = async ({ username, password }) => {
        try {
            const {
                status,
                data: { foundUser, encodedToken },
            } = await loginService(username, password);

            if (status === 200) {
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({ user: foundUser, token: encodedToken })
                );
                setCurrentUser(foundUser);
                setToken(encodedToken);
                console.log(`Successfully signed in as ${username}!`);
                navigate("/");
            }
        } catch (err) {
            console.error(err);
            console.error("Unable to sign in!");
        }
    };

    const signupHandler = async (userSignupDetails) => {
        const {
            firstName,
            lastName,
            username,
            password,
            confirmPassword,
            avatar,
        } = userSignupDetails;
        if (password !== confirmPassword) {
            console.error("Password fields are not matching!");
            navigate("/signup");
        } else {
            try {
                const response = await signupService(
                    username,
                    password,
                    firstName,
                    lastName,
                    avatar
                );

                const {
                    status,
                    data: { createdUser, encodedToken },
                } = response;

                if (status === 201) {
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify({
                            user: createdUser,
                            token: encodedToken,
                        })
                    );
                    setCurrentUser(createdUser);
                    setToken(encodedToken);
                    console.log(`Successfully signed up as ${username}!`);
                    navigate("/");
                }
            } catch (err) {
                // const { response } = err;
                // if (response.status === 422) {
                //   console.error(
                //     "Username already exists! Please try signing up with another username!"
                //   );
                // } else {
                console.error(err);
                console.error("Unable to sign up!");
                // }
            }
        }
    };

    const logoutHandler = () => {
        setToken(null);
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
        console.log("Successfully logged out!");
        navigate(location?.state?.from?.pathname ?? "/");
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                currentUser,
                loginHandler,
                logoutHandler,
                signupHandler,
                setCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
