import { isEmpty } from "lodash";
import { useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import plusIcon from "../assets/plus-white.png";
import CustomerInfo from "./customer-info";
import InvoiceModal from "./invoice-modal";

const Main = ({ createInvoices, invoices }) => {
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
            <img src={plusIcon} className="img-fluid plus-icon" />
          </div>
        </div>
        <Card className="mt-4">
          <CardBody>
            <div className="d-flex justify-content-between mt-4">
              <div className="mb-2 text-uppercase">
                <div className="invoice-title">Invoice</div>
                <div className="invoice-id"># - Inv1122</div>
                <div className="invoice-time">11:35 AM - Today</div>
              </div>
              <div className="text-right d-flex">
                <CustomerInfo />
                <div className="align-items-end d-flex ml-3 mb-2"></div>
              </div>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>QUANTITY</th>
                  <th>PRICE - ₹</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
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
