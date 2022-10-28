import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe style={{background:' #ffffff', border:' none',borderRadius:' 2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', width:"640", height:"480"}} src="https://charts.mongodb.com/charts-functionally-e-commerce-dopub/embed/charts?id=633dae5e-5b5a-48e9-8fb0-1160b117d65b&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
