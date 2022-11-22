import React from "react";

const Header = ({date}) => {
  return (
    <nav className="py-3 text-white-50 text-capitalize">
      <div className="row g-0">
        <div className="col-md-6">
          <h4 className="fw-bold">ASTRONOMY PICTURE OF THE DAY</h4>
        </div>
        <div className="col-md-6">
          <h4 className="text-md-end pt-1">{date}</h4>
        </div>
      </div>
    </nav>
  );
};

export default Header;
