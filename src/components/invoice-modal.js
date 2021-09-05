import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import closeIcon from "../assets/close-btn.png";
import CustomerDetails from "./customer-details";
import ProductDetails from "./product-details";

const InvoiceModal = ({
  modal,
  toggle,
  setFullName,
  fullName,
  setPhoneNumber,
  phoneNumber,
  setAddress,
  address,
  setPincode,
  pincode,
  setEmail,
  email,
}) => {
  const [customerComponent, setCustomerComponent] = useState(true);

  const skipCustomerComponent = () => {
    setCustomerComponent(!customerComponent);
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
              <img src={closeIcon} className="img-fluid" />
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
            />
          ) : (
            <ProductDetails skipCustomerComponent={skipCustomerComponent} />
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            {`${customerComponent ? "Proceed" : "Save"}`}
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default InvoiceModal;
