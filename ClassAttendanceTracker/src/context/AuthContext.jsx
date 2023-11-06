import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        role: null,
        firstname: null,
        lastname: null,
    });

    const login = (role, firstname, lastname) => {
        setUser({ isAuthenticated: true, role, firstname, lastname });
    };

    const logout = () => {
        setUser({ isAuthenticated: false, role: null, firstname: null, lastname: null });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
