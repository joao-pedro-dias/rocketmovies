import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [data, setData] = useState({});
    
    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível entrar");
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@rocketmovies:token");
        localStorage.removeItem("@rocketmovies:user");

        setData({});
    }

    async function updateProfile( { user }){
        try{

            await api.put("/users", user);
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil atualizado!");

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível atualizar o perfil");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token");
        const user = localStorage.getItem("@rocketmovies:user");

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return(
        <AuthContext.Provider value={{
            signIn,
            user: data.user,
            updateProfile,
            signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

//este é um hook
function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };