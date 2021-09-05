const CustomerInfo = ({ email, fullName }) => {
  return (
    <>
      <div>
        <div className="info-title text-uppercase">Customer Details</div>
        <div className="info-name text-uppercase">{fullName}</div>
        <div className="info-email text-lowercase">{email}</div>
      </div>
    </>
  );
};

export default CustomerInfo;
