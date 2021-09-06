import { isEmpty } from "lodash";
import moment from "moment";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import closeIcon from "../assets/close-btn.png";
import { currencyFormatter } from "../helper";
import CustomerDetails from "./customer-details";
import ProductDetails from "./product-details";

const InvoiceModal = ({ modal, toggle, invoices, createInvoices }) => {
  const [customerComponent, setCustomerComponent] = useState(true);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [itemArray, setItemArray] = useState([]);

  const skipCustomerComponent = () => {
    setCustomerComponent(!customerComponent);
  };

  const validateCustomerInfo = () => {
    let result = true;
    if (!isEmpty(fullName)) {
      setNameError("");
    } else {
      result = false;
      setNameError("Full name is required.");
    }
    if (!isEmpty(email)) {
      setEmailError("");
    } else {
      result = false;
      setEmailError("Email is required.");
    }
    if (!isEmpty(phoneNumber)) {
      setPhoneError("");
    } else {
      result = false;
      setPhoneError("Phone number is required.");
    }

    return result;
  };

  const onClickProceed = () => {
    if (validateCustomerInfo()) {
      skipCustomerComponent();
    }
  };

  const onClickSave = () => {
    if (validateCustomerInfo()) {
      const invoiceObj = {
        id: invoices.length + 1,
        grandTotal: grandTotal,
        tax: tax,
        discount: discount,
        items: itemArray,
        name: fullName,
        email: email,
        address: address,
        phoneNumber: phoneNumber,
        pincode: pincode,
        subTotal: subTotal,
        createdAt: moment(new Date()).format(),
      };
      createInvoices(invoiceObj);
      toggle();
    }
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <ModalBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="font-weight-bold">Create New Invoice</div>
              <div className="text-muted ml-5">Order No: 1234</div>
            </div>
            <span className="cursor-pointer" onClick={toggle}>
              <img src={closeIcon} className="img-fluid" alt="close-icon" />
            </span>
          </div>
          {customerComponent ? (
            <CustomerDetails
              setFullName={setFullName}
              fullName={fullName}
              setPhoneNumber={setPhoneNumber}
              phoneNumber={phoneNumber}
              setAddress={setAddress}
              address={address}
              setPincode={setPincode}
              pincode={pincode}
              setEmail={setEmail}
              email={email}
              skipCustomerComponent={skipCustomerComponent}
              nameError={nameError}
              emailError={emailError}
              phoneError={phoneError}
            />
          ) : (
            <ProductDetails
              email={email}
              fullName={fullName}
              skipCustomerComponent={skipCustomerComponent}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              tax={tax}
              setTax={setTax}
              discount={discount}
              setDiscount={setDiscount}
              setGrandTotal={setGrandTotal}
              itemArray={itemArray}
              setItemArray={setItemArray}
            />
          )}
        </ModalBody>
        <ModalFooter
          className={`${
            customerComponent ? "" : "d-flex justify-content-between"
          }`}
        >
          {!customerComponent && (
            <div className="d-flex justify-content-around w-50">
              <div>
                <div>Tax</div>
                <div>{`${
                  !isEmpty(tax)
                    ? currencyFormatter.format((subTotal * tax) / 100)
                    : "0.00"
                }`}</div>
              </div>
              <div>
                <div>Discount</div>
                <div>{`${
                  !isEmpty(discount)
                    ? currencyFormatter.format((subTotal * discount) / 100)
                    : "0.00"
                }`}</div>
              </div>
              <div>
                <div>Grand Total</div>
                <div>{`${
                  grandTotal ? currencyFormatter.format(grandTotal) : "0.00"
                }`}</div>
              </div>
            </div>
          )}
          <Button
            color="primary"
            className="w-25"
            onClick={() =>
              customerComponent ? onClickProceed() : onClickSave()
            }
          >
            {`${customerComponent ? "Proceed" : "Save"}`}
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default InvoiceModal;
