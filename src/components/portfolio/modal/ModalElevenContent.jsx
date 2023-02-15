import React from "react";

const ModalElevenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>A/A и A/B тестирование с помощью bootstrap</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/aa_ab_test_with_bootstrap" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/aa_ab_test_with_bootstrap/aa_ab_test_with_bootstrap.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, scipy, bootstrap</span>
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
            Обучающая платформа EdTex, где пользователи могут покупать 
            подписку и проходить обучающие курсы как в видео, так и в 
            текстовом формате. Отделом аналитики была выдвинута гипотеза, 
            что стандартный видеоплеер в мобильном приложении платформы 
            работает плохо, что может вызывать отток клиентов.
          </p>
          <p>
            Отделом разработки был интегрирован более новый видеоплеер. 
            Теперь нам предстоит удостовериться, что новый видеоплеер 
            положительно повлияет на лояльность пользователей. Для этого 
            были сформированы выборки для A/A и A/B тестирования. В 
            качестве целевого показателя решено использовать медианную 
            продолжительность сессий пользователей в мобильном приложении.
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Проведение A/A теста</li>
            <li>Проверка гипотезы о значимой разнице медианной продолжительности сессий, в A B выборках</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalElevenContent;
