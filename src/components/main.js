import { get } from "lodash";
import moment from "moment";
import { useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import plusIcon from "../assets/plus-white.png";
import { currencyFormatter } from "../helper";
import CustomerInfo from "./customer-info";
import InvoiceModal from "./invoice-modal";

const Main = ({ createInvoices, invoices, selectedInvoice }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const openInvoiceModal = () => {
    setModal(true);
  };

  return (
    <>
      <div className="col-9 main">
        <div className="d-flex justify-content-between">
          <div className="text-uppercase text-muted title mt-4">Invoice</div>
          <div className="cursor-pointer" onClick={openInvoiceModal}>
            <img
              src={plusIcon}
              className="img-fluid plus-icon"
              alt="plus-icon"
            />
          </div>
        </div>
        <Card className="mt-4 overflow-auto">
          <CardBody>
            {get(selectedInvoice, "items", false) ? (
              <div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="mb-2 text-uppercase">
                    <div className="invoice-title">Invoice</div>
                    <div className="invoice-id"># - {selectedInvoice.id}</div>
                    <div className="invoice-time">
                      {moment(selectedInvoice.time).fromNow()}
                    </div>
                  </div>
                  <div className="text-right d-flex">
                    <CustomerInfo
                      email={selectedInvoice.email}
                      fullName={selectedInvoice.name}
                    />
                    <div className="align-items-end d-flex ml-3 mb-2"></div>
                  </div>
                </div>
                <Table>
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th></th>
                      <th>QUANTITY</th>
                      <th></th>
                      <th>PRICE - ₹</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedInvoice.items.map((item, index) => {
                      return (
                        <tr key={`${index}_${item.name}`}>
                          <td>{item.name}</td>
                          <td></td>
                          <td>{item.qty}</td>
                          <td></td>
                          <td>{item.price}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td>
                        <div className="text-center">
                          <div className="d-flex justify-content-around">
                            <span>Sub Total</span>
                            <span>
                              {currencyFormatter.format(
                                selectedInvoice.subTotal
                              )}
                            </span>
                          </div>
                          <div className="d-flex justify-content-around">
                            <span>Tax ({selectedInvoice.tax}%)</span>
                            <span>
                              {currencyFormatter.format(
                                (selectedInvoice.subTotal *
                                  selectedInvoice.tax) /
                                  100
                              )}
                            </span>
                          </div>
                          <div className="d-flex justify-content-around">
                            <span>Discount ({selectedInvoice.discount}%)</span>
                            <span>
                              {currencyFormatter.format(
                                (selectedInvoice.discount *
                                  selectedInvoice.subTotal) /
                                  100
                              )}
                            </span>
                          </div>
                          <div className="d-flex justify-content-around font-weight-bolder mt-3">
                            <span>Grand Total</span>
                            <span>
                              {currencyFormatter.format(
                                selectedInvoice.grandTotal
                              )}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                Create invoices and select an invoice from invoices list.
              </div>
            )}
          </CardBody>
        </Card>
      </div>
      {modal && (
        <InvoiceModal
          modal={modal}
          toggle={toggleModal}
          createInvoices={createInvoices}
          invoices={invoices}
        />
      )}
    </>
  );
};

export default Main;
