import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Invoices from "./components/invoices";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState({});

  const createInvoices = (obj) => {
    setInvoices([{ ...obj }, ...invoices]);
  };

  const selectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="d-flex">
        <Invoices
          invoices={invoices}
          createInvoices={createInvoices}
          selectInvoice={selectInvoice}
        />
        <Main
          invoices={invoices}
          createInvoices={createInvoices}
          selectedInvoice={selectedInvoice}
        />
      </div>
    </div>
  );
}

export default App;
