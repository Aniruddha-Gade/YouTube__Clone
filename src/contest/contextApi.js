import React, { useState, useEffect, createContext } from 'react'

import { fetchDataFromApi } from '../utils/Api'

export const ApiContext = createContext();

// context provider funcion
export const ApiContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenu, setMobileMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const value = {
        loading, setLoading,
        searchResults, setSearchResults,
        selectedCategory, setSelectedCategory,
        mobileMenu, setMobileMenu,
        darkMode, setDarkMode,
        searchQuery, setSearchQuery
    }

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);


    // fetching Selected Category Data
    const fetchSelectedCategoryData = (query) => {
        setLoading(true);

        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            const contents = res?.contents;
            console.log('inside context file -> ', contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };


    return (<ApiContext.Provider value={value}>
        {children}
    </ApiContext.Provider>)
}