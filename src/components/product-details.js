import { Input, Table } from "reactstrap";
import enterIcon from "../assets/enter-icon.png";
import editIcon from "../assets/edit.png";
import CustomerInfo from "./customer-info";
import React, { useEffect, useState } from "react";
import { currencyFormatter } from "../helper";

const ProductDetails = ({
  email,
  fullName,
  skipCustomerComponent,
  subTotal,
  setSubTotal,
  tax,
  setTax,
  discount,
  setDiscount,
  setGrandTotal,
  itemArray,
  setItemArray,
}) => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const onAddItem = () => {
    if (itemPrice > 0 && itemQty > 0) {
      createItemArrObj({
        name: itemName,
        qty: itemQty,
        price: itemPrice * itemQty,
      });
      setItemName("");
      setItemQty(1);
      setItemPrice(0);
    }
  };

  useEffect(() => {
    calculateSubTotal();
  }, [itemArray.length]);

  useEffect(() => {
    const tempTax = (subTotal * tax) / 100;
    const tempDisc = (subTotal * discount) / 100;
    const tempTotal = subTotal + tempTax - tempDisc;
    setGrandTotal(tempTotal);
  }, [tax, discount, subTotal]);

  const calculateSubTotal = () => {
    const sum = itemArray.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setSubTotal(sum);
  };

  const createItemArrObj = (obj) => {
    let tempArray = itemArray;
    tempArray.push(obj);
    setItemArray(tempArray);
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-items-end text-uppercase">
          Product Details
        </div>
        <div className="text-right d-flex">
          <CustomerInfo email={email} fullName={fullName} />
          <div className="align-items-end d-flex ml-3 mb-2">
            <img
              src={editIcon}
              alt="edit-icon"
              className="img-fluid cursor-pointer"
              onClick={skipCustomerComponent}
            />
          </div>
        </div>
      </div>
      <hr />
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
          {itemArray.map((item, index) => {
            return (
              <React.Fragment key={`${index}_${item.name}`}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td></td>
                </tr>
              </React.Fragment>
            );
          })}
          <tr>
            <td>
              <Input
                type="text"
                name="productName"
                id="productName"
                placeholder="Please enter item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </td>
            <td>
              <Input
                className="w-75"
                type="number"
                name="qty"
                id="qty"
                placeholder="0.00"
                value={itemQty}
                onChange={(e) => setItemQty(e.target.value)}
              />
            </td>
            <td>
              <Input
                className="w-75"
                type="number"
                name="price"
                id="price"
                placeholder="0.00"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </td>
            <td>
              <img
                src={enterIcon}
                alt="enter-icon"
                className="img-fluid enter-icon cursor-pointer"
                onClick={() => onAddItem()}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-5" />
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Input
            className="w-75 mr-2"
            type="number"
            name="tax"
            id="tax"
            placeholder="%"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />
          <Input
            className="w-75 ml-2"
            type="number"
            name="discount"
            id="discount"
            placeholder="%"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div>
          <span className="mr-5">Sub Total</span>
          <span className="mx-5 font-weight-bolder">
            {currencyFormatter.format(subTotal)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
