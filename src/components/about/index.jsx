import React from "react";
import { useEffect } from "react";
import Experience from "./Experience";
import Experience2 from "./Experience2";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Certificate from "./Certificate";

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ
                </h3>
              </div>
              {/* End .col */}

              {/* <div className="col-12 d-block d-sm-none">
                <img
                  src="img/hero/img-mobile.jpg"
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div> */}
              {/* image for mobile menu */}

              <div className="col-12 d-flex">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href="MaksimPerepelyukResume.pdf" download>
                  <span className="button-text">Скачать резюме</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          {/* <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div> */}
          {/* Achievements Ends */}
        </div>
        {/* End .row */}
        {/* Skills Starts */}
        <div className="row">
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Мои навыки
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience2 />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
      <div className="portfolio professional">
        <div className="col-12">
          <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
            Сертификаты
          </h3>
        </div>
        <div
          className="container grid-gallery main-content"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <Certificate />
        </div>
      </div>
    </section>
  );
};

export default Index;
