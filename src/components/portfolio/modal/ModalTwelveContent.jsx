import React from "react";

const ModalTwelveContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Парсер данных о погоде на момент начала футбольных матчей</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/ng_football_weather_scraper" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">python3, beautiful soup, requests</span>
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
          Парсер собирает данные о погоде с сайта футбольной статистики 
          <a href="https://www.nowgoal6.com/">https://www.nowgoal6.com/</a>. 
          Данные собраны для Английской Премьер Лиги за сезоны 2018-2019, 
          2019-2020, 2020-2021, 2021-2022
          </p>
          <h3>Структура собранных данных</h3>
          <ul>
            <li><code>champ_title</code> - название чемпионата</li>
            <li><code>date</code> - дата начала матча</li>
            <li><code>weather</code> - описание погоды (осадки, температура)</li>
            <li><code>home</code> - домашняя команда</li>
            <li><code>away</code> - гостевая команда</li>
            <li><code>result</code> - исход матча</li>
            <li><code>total_score</code> - количество забитых голов за матч</li>
            <li><code>first_half</code> - исход первого тайма</li>
            <li><code>second_half</code> - исход второго тайма</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwelveContent;
