import { isEmpty } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import searchIcon from "../assets/search-icon.png";
import { currencyFormatter } from "../helper";

const Invoices = ({ invoices, selectInvoice }) => {
  const [selectedInvoiceid, setSelectedInvoiceid] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  const selectInvoiceAndId = (item) => {
    selectInvoice(item);
    setSelectedInvoiceid(`${item.id}_${item.name}`);
  };

  useEffect(() => {
    setFilteredInvoices(invoices);
  }, [invoices]);

  useEffect(() => {
    const filtered = filterInvoices();
    setFilteredInvoices(filtered);
  }, [searchText]);

  const filterInvoices = () => {
    if (!searchText) return invoices;
    return invoices.filter(
      (item) =>
        item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  };

  return (
    <>
      <div className="col-3 invoices">
        <InputGroup className="mt-2">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <img src={searchIcon} className="img-fluid" alt="search-icon" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </InputGroup>
        <hr color="gray" />
        {isEmpty(filteredInvoices) && (
          <div className="text-center text-white">No invoices</div>
        )}
        {filteredInvoices.map((item) => {
          return (
            <div
              key={`${item.id}_${item.name}`}
              className="text-white cursor-pointer"
              onClick={() => selectInvoiceAndId(item)}
            >
              <div
                className={`p-2 ${
                  selectedInvoiceid === `${item.id}_${item.name}`
                    ? "selected-invoice"
                    : ""
                }`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>INV. # - {item.id}</span>
                  <span className="invoice-list-time">
                    {moment(item.time).fromNow()}
                  </span>
                </div>
                <div className="invoice-list-number my-1  ">
                  Items - {item.items.length}
                </div>
                <div className="d-flex justify-content-between">
                  <span className="invoice-list-name">{item.name}</span>
                  <span className="invoice-list-price">
                    {currencyFormatter.format(item.grandTotal)}
                  </span>
                </div>
              </div>
              <hr color="gray" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Invoices;
