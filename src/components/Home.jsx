import React from "react";

const Home = ({data}) => {
  return (
    <div className="card mb-4 bg-transparent border-0 text-secondary">
      <div className="row g-2">
        <div className="col-lg-6" style={{maxHeight: "600px"}}>
          <img src={data.img} className="img-fluid h-100 w-100" alt="..." />
        </div>
        <div className="col-lg-6">
          <div className="card-body">
            <div className="h5 pb-3 border-bottom border-secondary text-white-50">{data.title} | {data.copyright}</div>
            <p className="card-text lh-md pt-2 lead">
            <span className="fw-bold text-white-50">Explanation:</span> {data.explanation}
            </p>
            <a href="https://www.nasa.gov/" className="btn btn-secondary float-end" target="_blank" rel="noreferrer">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
