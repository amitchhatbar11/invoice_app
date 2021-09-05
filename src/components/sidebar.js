import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import searchIcon from "../assets/search-icon.png";

const Sidebar = () => {
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
      </div>
    </>
  );
};

export default Sidebar;
