import { createContext, useState } from "react";

const GlobalContext= createContext();


export const GlobalProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState('Main Menu')

    const updateCurrentPage = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <GlobalContext.Provider value={{
            currentPage, updateCurrentPage
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext