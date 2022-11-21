import { useState } from "react";
import Context from "./Context";

function AuthProvider( {children} ) {
    const [login_user, setLoginUser] = useState({}) 

    return ( 
        <Context.Provider value={[login_user, setLoginUser]}>
            {children}
        </Context.Provider>
    );
}

export default AuthProvider;