import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpence } from "./components/IncomeExpence";
import { History } from "./components/History";
import { NewTranscation} from "./components/NewTranscation";
import { GlobalProvider } from "./context/GlobalState";
import './App.css';
import { TransactionList } from "./components/TransactionList";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpence />
      <History />
      <NewTranscation />
      <TransactionList/>
      </div>
    </GlobalProvider>
  );
}

export default App;
