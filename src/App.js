import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

function App() {
  const [invoices, setInvoices] = useState([]);

  const createInvoices = (obj) => {
    setInvoices([{ ...obj }, ...invoices]);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="d-flex">
        <Sidebar invoices={invoices} createInvoices={createInvoices} />
        <Main invoices={invoices} createInvoices={createInvoices} />
      </div>
    </div>
  );
}

export default App;
