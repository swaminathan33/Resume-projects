import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProviderContent = ({children}) =>{
    const [post, setPost] = useState('')

    const value = {
        post,
        setPost
    }
    return (
        <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}

export const useContentContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProviderContent}