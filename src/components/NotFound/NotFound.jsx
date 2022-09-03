import React from "react";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 p-2">
      <div>
        <div className="d-flex justify-content-center">
          <img
            src="https://cdn4.iconfinder.com/data/icons/online-store/300/404-512.png"
            alt=""
            srcset=""
            style={{ width: 200 }}
          />
        </div>
        <h1 className="p-3 text-danger">Opp.... This Page NOT FOUND!!!!</h1>
      </div>
    </div>
  );
};

export default NotFound;
