'use client';
import React, { useContext, createContext, useState } from 'react';

const AppContext = createContext<any>(null);


const AppProvider: React.FC<{children: React.ReactNode}> =  ({children}) => {


    return (
        <AppContext.Provider 
            value={{

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export {AppContext, AppProvider}