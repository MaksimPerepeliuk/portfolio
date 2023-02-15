import React from "react";

const ModalTenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Кластеризация пользователей с помощью алгоритмов обучения без учителя</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/ml_clustering_online_app_users" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/ml_clustering_online_app_users/ml_clustering_online_app_users.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, plotly3d, seaborn, sqlalchemy, sklearn (K-means, PCA), scipy (hierarchy clustering)</span>
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
            В нашем распоряжении база данных онлайн магазина, где хранятся 
            данные о пользователях зарегистрировавшихся в приложении магазина, 
            данные о покупках и сессиях. Нам требуется провести кластеризацию 
            пользователей для дальнейшего выделения целевых групп в 
            маркетинговых активностях
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Выгрузить необходимые данные из БД</li>
            <li>Провести кластеризацию пользователей</li>
            <li>Интерпретация результатов кластеризации</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTenContent;
