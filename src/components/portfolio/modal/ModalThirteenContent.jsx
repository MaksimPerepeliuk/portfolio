import React from "react";

const ModalThirteenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Парсер футбольной статистики</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/ng_football_stats_scraper" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">python3, requests, beautiful soup, Selenium, multiprocessing</span>
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
          Парсер собирает статистику по матчам, с сайта футбольной статистики 
          <a href="https://www.nowgoal6.com/"> https://www.nowgoal6.com/</a>. 
          Данные включают в себя основные европейские чемпионаты
          </p>
          <h3>Структура собранных данных</h3>
          Данные статистики за 7261 матч включающие в себя 36 признаков для каждой команды такие как - 
          количество голов, количество ударов, количество опасных атак, количество желтых карточек и.т.д.
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThirteenContent;
