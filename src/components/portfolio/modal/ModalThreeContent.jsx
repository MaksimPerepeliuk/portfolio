import React from "react";

const ModalThreeContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Исследование методов расчета и прогнозирования Customer Lifetime Value</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/ltv_calc_and_forecasting" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/ltv_calc_and_forecasting/ltv_calc_and_forecasting.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, scipy, sklearn, CatBoost</span>
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
            Существует множество способов расчета и прогнозирования метрики Customer Lifetime Value 
            (CLV) - пожизненной ценности клиента. В данном исследовании мы попробуем рассчитать и 
            спрогнозировать данную метрику несколькими способами
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Расчет CLV с помощью выручки</li>
            <li>Расчет CLV с помощью валовой прибыли</li>
            <li>Прогнозирование CLV на основе анализа графика и аппроксимации функции, описывающей связь на данном графике</li>
            <li>Прогнозирование CLV с помощью алгоритмов регрессии</li>
          </ul>
          <h3>Исходные данные</h3>
          <p>
            Каждая строка представляет собой отдельное событие 
            (либо оформление пробной подписки, либо оплата после завершения пробного периода)
          </p>
          <ul>
            <li><code>InvoiceNo</code> - идентификатор заказа</li>
            <li><code>StockCode</code> - код акции</li>
            <li><code>Description</code> - текстовое описание товара</li>
            <li><code>Quantity</code> - количество товара в заказе</li>
            <li><code>InvoiceDate</code> - дата заказа</li>
            <li><code>UnitPrice</code> - цена товара за 1 шт</li>
            <li><code>CustomerID</code> - идентификатор клиента</li>
            <li><code>Country</code> - страна клиента</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
