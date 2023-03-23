import React from "react";

const ModalFifteenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Калькулятор юнит-экономики в Excel</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/unit_economic_calc_excel" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">Excel</span>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </figcaption>
        <hr/>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div className="blog-excerpt open-sans-font pb-5">
          <p>
            Расчет фактических и прогнозируемых метрик юнит-экономики онлайн магазина
          </p>
          <h3>Функционал калькулятора</h3>
          <ul>
            <li>Расчет LTV на основе валовой прибыли;</li>
            <li>Расчет ROMI;</li>
            <li>Расчет метрик по относительным изменениям.</li>
          </ul>
          <a href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/unit_economic_calc_excel" target="_blank" rel="noreferrer"><img src="img/projects/unit_calc_dashboard.png" alt="" /> </a>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFifteenContent;
