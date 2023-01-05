import React from "react";

const NotFound = () => {

    return (
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <h4 className="alert-heading">Oops! Something went wrong.</h4>
        <p>We couldn't find anything to show.</p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
};

export default NotFound;
