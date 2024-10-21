"use client"
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children } : {
    children: React.ReactNode
}) {
    const [pageLoading, setPageLoading] = useState(true)

    return (
        <AppContext.Provider value={{pageLoading ,setPageLoading}}>
            {children}
        </AppContext.Provider>
    )
}


export function UseAppContext() {
    return useContext(AppContext)
}

