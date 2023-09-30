import Carousel from "react-bootstrap/Carousel";
import "./whoCss.css";

export const WhoAreWePage = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-150"
          id="img-slide"
          src="https://img.freepik.com/free-vector/pastel-gradient-2_78370-257.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
          <h5 className="h5-first">
            Who We Are - Your Trusted Pet Marketplace
          </h5>
          <div className="first-img">
            <img
              src="https://as2.ftcdn.net/v2/jpg/00/31/84/35/1000_F_31843527_vuGbXlFVcTZ9FMvz1ymSFHo5r789YhdK.jpg"
              alt="pet-image"
            />
          </div>
          <div className="d-first">
            <div className="p1-par">
              <b> We're not just a pet marketplace; </b> <hr />
              We're a community dedicated to enriching the lives of both animals
              and humans alike. <br /> Whether you're seeking a loving home for
              your four-legged family member or looking to make a furr-ever
              friend, we've got you covered. <br />
            </div>
            <div className="p2-par">
              <b>
                Our platform is designed for ease and convenience, allowing you
                to:
              </b>{" "}
              <hr /> <b>Post Ads:</b> Easily list your pets and reach a
              community of pet enthusiasts searching for their next companion.{" "}
              <br /> <b>Discover Pets: </b>Browse through listings and find the
              pet that you've always dreamed of, all with the assurance of a
              secure, trusted environment. <br />
            </div>

            <div className="p3-par">
              We understand that pets are family, and that's why we focus on
              responsible pet ownership, advocating for the well-being and
              humane treatment of all animals on our platform. <hr />
              With us, you're not just making transactions; you're making
              connections that last a lifetime..
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-150"
          id="img-slide"
          src="https://img.freepik.com/free-vector/pastel-gradient-2_78370-257.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="custom-caption">
          <h5 className="h5-second">Need Help? We're Just an Email Away!</h5>

          <div className="first-img">
            <img
              src="https://as2.ftcdn.net/v2/jpg/00/31/84/35/1000_F_31843527_vuGbXlFVcTZ9FMvz1ymSFHo5r789YhdK.jpg"
              alt="pet-image"
            />
          </div>
          <div className="d-first">
            <div className="p1-par p22-par">
              If you have any questions, concerns, or simply need guidance on
              navigating our platform, don't hesitate to reach out. Our
              dedicated support team is always ready to assist you. <hr />
              Feel free to email us at   <a href="mailto:rankapejanovic85@gmail.com" style={{color:"red"}}>rankapejanovic85@gmail.com</a>—we're here
              to make your pet journey as seamless as possible.
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
