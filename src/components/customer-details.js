import { Col, Input, Label } from "reactstrap";
import skipIcon from "../assets/skip-icon.png";

const CustomerDetails = ({
  skipCustomerComponent,
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
  return (
    <>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-items-center text-uppercase">
          Customer Details
        </div>
        <span
          className="skip-div cursor-pointer"
          onClick={skipCustomerComponent}
        >
          SKIP <img src={skipIcon} alt="skip-icon" className="ml-1 img-fluid" />
        </span>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <Label for="fullName">Full Name</Label>
          <sup>*</sup>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Customer Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="col-6">
          <Label for="exampleEmail">Phone Number</Label>
          <sup>*</sup>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder=""
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="col-6 mt-4">
          <Label for="exampleText">Address</Label>
          <Input
            type="textarea"
            rows="4"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-6 mt-4">
          <Label for="exampleEmail">Email</Label>
          <sup>*</sup>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Customer Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label for="pincode">Zip</Label>
          <Input
            className="w-50"
            type="number"
            name="pincode"
            id="pincode"
            placeholder="560067"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
