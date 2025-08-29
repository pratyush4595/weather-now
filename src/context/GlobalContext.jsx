import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function ContextProvider(props) {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "" });

    return (
        <GlobalContext.Provider value={{ loading, setLoading, alert, setAlert }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
