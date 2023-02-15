import React from "react";

const ModalEightContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Сегментирование клиентов онлайн магазина с помощью RFM Score</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/rfm_segmentation_for_marketing" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/rfm_segmentation_for_marketing/rfm_segmentation_for_marketing.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, sqlalchemy</span>
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
            Есть ограниченный бюджет для проведения рекламной компании. 
            Для экономии бюджета и увеличения эффективности компании, 
            требуется выделить сегменты клииентов, наиболее лояльных к 
            нашему онлайн магазину, на которых и будет нацелена рекламная 
            компания
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Выгрузить необходимые данные из БД</li>
            <li>Провести RFM анализ и на его основе выделить сегменты клиентов, на которые будет нацелена рекламная компания</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalEightContent;
