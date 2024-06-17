import React, { createContext, useReducer } from "react";

// Define initial state
const initialState = {
  count: 0,
  isLogin: false,
  isAdmin: false,
  isSupervisor: false,
  isStudent: false,
  isSidebarOpen: true,
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "isLoginHandler":
      return { ...state, isSidebarOpen: action.payload };
    case "toggleSidebar":
      return { ...state, isSidebarOpen: action.payload };
    default:
      return state;
  }
};

// Create context
export const GlobalStateContext = createContext();

// Create provider component
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isLoginHandler = (data) => {
    dispatch({
      type: "isLoginHandler",
      payload: data,
    });
  };

  const toggleSidebar = (data) => {
    alert("dd");
    dispatch({
      type: "toggleSidebar",
      payload: data,
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        isLogin: state.isLogin,
        isLoginHandler,
        isSidebarOpen: state.isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
