import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpence } from "./components/IncomeExpence";
import { History } from "./components/History";
import { NewTranscation} from "./components/NewTranscation";

import './App.css';
function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpence />
      <History />
      <NewTranscation />
    </div>
  );
}

export default App;
