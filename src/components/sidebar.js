import moment from "moment";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import searchIcon from "../assets/search-icon.png";

const Sidebar = ({ invoices }) => {
  console.log(`********* sidebar`, invoices);
  return (
    <>
      <div className="col-3 sidebar">
        <InputGroup className="mt-2">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <img src={searchIcon} className="img-fluid" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search..."
          />
        </InputGroup>
        {invoices.map((item) => {
          return (
            <div key={`${item.id}_${item.name}`}>
              <div>
                <span>INV. # - {item.id}</span>
                <span>{moment(item.time).fromNow()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
