import React from "react";

const Header = () => {
  return (
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="rounded-circle wrap-img mx-5  mt-5 mb-4 shadow  " >
          <img
            src="sam.jpeg"
            alt=""
            height="100%"
            width="100%"
            className="rounded-circle p-2 border border-primary"
          />
        </div>
         <div className="container px-5 text-center pt-3 ">
           <h3 className="my-name">Sankalp Mishra</h3>
           <p className="text-muted">Full Stack Developer</p>
                <span className="pr-2  text-warning">
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span className="mr-3 text-muted">Kanpur, India</span>
                <span className="pr-2 text-warning">
                  <i class="fas fa-mobile-alt"></i>
                </span>
                <span className="mr-3 text-muted">+91 980 784 3143</span>
            <span className="pr-2 text-warning">
              <i class="far fa-envelope"></i>
            </span>
            <span className="mr-3 text-muted">
              sankalpmishra2795@gmail.com
            </span>
        <div className="container text-center pt-3 ">
          <p className="lead px-5 my-details w-60 mx-auto poppins">
            An aspiring Full Stack Web Developer,I want to work in such a way
            that can inspire others and lead to the growth of mine as well as
            the organisation I will work with.
          </p>
          <a href="https://github.com/sankalpmishra2795" target="_blank">
            <i
              class="fab fa-github-alt text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i
              class="fab fa-twitter text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sankalp-mishra-2a64151b5"
            target="_blank"
          >
            <i
              class="fab fa-linkedin-in text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          {/* <a
            href="https://www.hackerrank.com/Suyashmishra8604?hr_r=1"
            target="_blank"
          >
            <i
              class="fab fa-hackerrank text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a> */}
          <a href="https://www.instagram.com/shakamishra/" target="_blank">
            <i
              class="fab fa-instagram text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
        </div>
         <div className="text-center mt-4">
        <a
          href="https://drive.google.com/file/d/18twpWTTRb56JU8SuVMNs7mTiHvwLO8HF/view?usp=drivesdk"
          className="btn cv-btn mb-5 dosis"
          target="_blank"
        >
          Resume
        </a>
      </div>
      </div>
     
    </div>
       
  );
};

export default Header;
