import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/authService";
import { toast } from "react-hot-toast";

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
                toast.success(`Successfully signed in as ${username}!`, {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
                navigate("/");
            }
        } catch (err) {
            console.error(err);
            toast.error("Unable to sign in!", {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
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
            toast.error("Password fields are not matching!", {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
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
                    toast.success(`Successfully signed up as ${username}!`, {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    navigate("/");
                }
            } catch (err) {
                console.error(err);
                toast.error("Unable to sign up!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        }
    };

    const logoutHandler = () => {
        setToken(null);
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
        toast.success("Successfully logged out!", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
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
