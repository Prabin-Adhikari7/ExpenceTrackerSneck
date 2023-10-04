import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  Transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};
//contextApi demonstration for expense js .
// Create a new context
export const GlobalContext = createContext(initialState);

// Provide component needed in the application
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      transactions: state.Transactions, // Changed "Transactions" to "transactions"
      dispatch, // You can provide the dispatch function if needed
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
