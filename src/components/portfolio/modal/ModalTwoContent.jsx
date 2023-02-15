import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Анализ и прогнозирование метрик юнит-экономики мобильного приложения для сканирования документов</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/mobile_scan_app_product_analysis" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/mobile_scan_app_product_analysis/mobile_scan_app_product_analysis.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, scipy, seaborn, когортный анализ, продуктовый анализ</span>
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
            Приложение - мобильная утилита для сканирования документов. 
            Модель монетизации подписочная, есть пробный период 7 дней с 
            дальнейшим переходом в оплату 4.99 USD в неделю
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Необходимо рассчитать текущий LTV юзера, используя когортный анализ (cohorting event - оформление пробного периода, когорта представляет собой кол-во возможных операций).</li>
            <li>Спрогнозировать, каким будет LTV на полгода.</li>
            <li>Построить график, который будет отображать кривую фактического LTV на фоне кривой прогнозируемого LTV.</li>
            <li>Рассчитать ROMI на 4 недели и спрогнозировать его на полгода, если стоимость привлечения платящего пользователя 6 USD.</li>
          </ul>
          <h3>Исходные данные</h3>
          <p>
            Каждая строка представляет собой отдельное событие 
            (либо оформление пробной подписки, либо оплата после завершения пробного периода)
          </p>
          <ul>
            <li><code>product_id</code> - идентификатор оформленной подписки</li>
            <li><code>quantity</code> - количество оформленных подписок</li>
            <li><code>is_trial_period</code> - является ли оформленная подписка пробной</li>
            <li><code>purchase_date</code> - дата оформления подписки</li>
            <li><code>user_id</code> - идентификатор пользователя</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
