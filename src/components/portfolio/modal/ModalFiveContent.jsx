import React from "react";

const ModalFiveContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>A/B тестирование нового дизайна продающей страницы сайта</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/ab_test_website_design" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/ab_test_website_design/ab_test_website_design.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, seaborn, statsmodels, A/B тестирование, проверка гипотез</span>
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
            На сайте по продаже книг есть раздел с предложениями о покупке набора сразу 
            из нескольких книг по более выгодной цене, чем при покупке их по отдельности.
          </p>
          <p>
            Дизайнером сайта было предложено изменить эту страницу, так как по его мнению 
            она слишком громоздкая и отпугивает некоторых потенциальных покупателей
          </p>
          <p>
            Для принятия решения о внедрении нового дизайна было принято решение провести 
            A/B тест. Так как у нас имеются данные о конверсии с данной страницы в 15%, 
            мы рассчитали, что нам будет выгодно увеличение конверсии до 15.5%
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Рассчет размера выборки, по достижению которой мы остановим тест</li>
            <li>Анализ результатов A/B тестирования и проверка гипотез о значимой разнице конверсий в группах теста</li>
          </ul>
          <h3>Исходные данные</h3>
          <ul>
            <li><code>user_id</code> - идентификатор пользователя</li>
            <li><code>timestamp</code> - дата перехода на страницу с предложениями</li>
            <li><code>group</code> - группы теста control/treatment</li>
            <li><code>converted</code> - была ли совершена покупка</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFiveContent;
