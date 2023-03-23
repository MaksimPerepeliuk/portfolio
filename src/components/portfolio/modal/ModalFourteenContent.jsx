import React from "react";

const ModalFourteenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Когортный анализ онлайн магазина с помощью PostgreSQL</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/cohort_analysis_sql" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/cohort_analysis_sql/cohort_analysis_sql.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, seaborn, PostgreSQL, sqlalchemy</span>
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
            С помощью postgreSQL провести когортный анализ данных онлайн магазина
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Рассчитать коэффициент конверсии в первую покупку по когортам</li>
            <li>Рассчитать коэффициент удержания пользователей по когортам</li>
          </ul>
          <h3>Исходные данные</h3>
          <p>Таблицы в схеме online_store:</p>
          <ul>
            <li><code>costs</code> - затраты на привлечение пользователей</li>
            <li><code>events</code> - события в приложении</li>
            <li><code>orders</code> - заказы, оформленные клиентами</li>
            <li><code>profiles</code> - профили зарегистрированных пользователей</li>
            <li><code>sessions</code> - информация о сессиях пользователей</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourteenContent;
