import React from "react";

const ModalOneContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Анализ Retention Rate в приложении покупок</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/retention_rate_store_app" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/retention_rate_store_app/retention_rate_store_app.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, scipy, seaborn, когортный анализ, проверка гипотез</span>
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
            В июле 2015 года провели специальную акцию, направленную на 
            улучшение коэффициента удержания клиентов. Новым юзерам слали 
            письмо с купоном на скидку.
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Выяснить, сработала ли акция</li>
            <li>Как повел себя коэффициент удержания после проведения акции?</li>
          </ul>
          <h3>Исходные данные</h3>
          <ul>
            <li><code>user_id</code> - идентификатор пользвателя</li>
            <li><code>order_id</code> - идентификатор заказа</li>
            <li><code>reg_date</code> - дата регистрации пользователя</li>
            <li><code>transaction_date</code> - дата оформления заказа</li>
            <li><code>revenue</code> - выручка заказа</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
