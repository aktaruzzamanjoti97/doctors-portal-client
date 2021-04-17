import React from "react";
import featured from "../../../images/featured.png";
import depression from "../../../images/Depression.jpg";

const FeaturedService = () => {
  return (
    <section className="features-service pb-0 pd-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">

          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={depression} alt="" />
          </div>

          <div className="col-md-7 align-self-center">
            <h1>Predict Your Depression</h1>
            <p className="text-secondary my-5 text-justify">
              We Can Predict Depression label of a person. In this case, we
              have to Analysis some Data for understanding some Reasons for
              Depression. We know every man can have a family problem of
              Financial Problem or other problem. If we understand how this type
              of Problem Create Depression then we can Predict this.
            </p>
            <button
              style={{
                backgroundColor: "#12D0DC",
                color: "white",
                fontWeight: "700",
              }}
              class="btn"
            >
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
