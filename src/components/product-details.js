import { Input, Table } from "reactstrap";
import enterIcon from "../assets/enter-icon.png";
import editIcon from "../assets/edit.png";
import CustomerInfo from "./customer-info";

const ProductDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-items-end text-uppercase">
          Product Details
        </div>
        <div className="text-right d-flex">
          <CustomerInfo />
          <div className="align-items-end d-flex ml-3 mb-2">
            <img
              src={editIcon}
              alt="edit-icon"
              className="img-fluid cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="productName"
                id="productName"
                placeholder="Please enter item Name"
              />
            </td>
            <td>
              <Input
                className="w-75"
                type="number"
                name="qty"
                id="qty"
                placeholder="0.00"
              />
            </td>
            <td>
              <Input
                className="w-75"
                type="number"
                name="price"
                id="price"
                placeholder="0.00"
              />
            </td>
            <td>
              <img
                src={enterIcon}
                alt="enter-icon"
                className="img-fluid enter-icon cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ProductDetails;
