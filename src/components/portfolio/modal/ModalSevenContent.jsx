import React from "react";

const ModalSevenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Анализ признаков преступников и потерпевших в Российской Федерации</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/rus_offenders_victims_profiles" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/rus_offenders_victims_profiles/rus_offenders_victims_profiles.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, seaborn, проверка гипотез</span>
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
            Правоохранительные органы Российской Федерации осуществляют сбор 
            статистики по лицам совершившими преступления, а так же лицам, которые признаны потерпевшими в результате противоправной деятельности.
          </p>
          <p>Источник информации: <a href="https://xn--b1aew.xn--p1ai/opendata/">Открытые данные МВД Российской Федерации</a></p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Исследовать половозрастной портрет преступников и потерпевших в Российской Федерации</li>
            <li>Исследовать динамику изменения значений половозрастных признаков по годам</li>
            <li>Выявить регионы Российской Федерации, которые отличаются от общих тенденций по половозрастным признакам преступников и потерпевших</li>
          </ul>
          <h3>Исходные данные</h3>
          <p>Таблица <b>gender_age_crimes</b> - количество выявленных преступников в период 2014-2021 гг, их половозрастные признаки:</p>
          <ul>
            <li><code>region</code> - субъект Российской Федерации</li>
            <li>
              <code>offender_feature</code> - признак преступника
              <ul>
                <li>выявлено лиц, совершивших преступления</li>
                <li>выявлено лиц, совершивших преступления, в том числе женщин</li>
                <li>выявлено лиц, совершивших преступления, в том числе несовершеннолетних</li>
              </ul>
            </li>
            <li><code>total</code> - количество преступников</li>
            <li><code>year</code> - год</li>
          </ul>
          <p>Таблица <b>deviations_influence_crimes</b> - количество выявленных преступников в период 2015-2021 гг, в состоянии алкогольного, наркотического, токсического опьянения, а также лиц повторно совершавших преступления:</p>
          <ul>
            <li><code>region</code> - субъект Российской Федерации</li>
            <li>
              <code>offender_feature</code> - признак преступника
              <ul>
                <li>количество расследованных преступлений, совершенных лицами, ранее совершавшими преступления</li>
                <li>количество расследованных преступлений, совершенных в состоянии алкогольного опьянения</li>
                <li>количество расследованных преступлений, совершенных в состоянии наркотического опьянения</li>
                <li>количество расследованных преступлений, совершенных в состоянии токсического опьянения</li>
              </ul>
            </li>
            <li><code>total</code> - количество преступников</li>
            <li><code>year</code> - год</li>
          </ul>
          <p>Таблица <b>victims</b> - количество потерпевших в период 2015-2021 гг, их юридический статус и половозрастные признаки:</p>
          <ul>
            <li><code>region</code> - субъект Российской Федерации</li>
            <li>
              <code>offender_feature</code> - признак преступника
              <ul>
                <li>количество потерпевших</li>
                <li>количество потерпевших, в том числе юридических лиц</li>
                <li>количество потерпевших, в том числе физических лиц</li>
                <li>количество потерпевших, в том числе погибших</li>
                <li>количество потерпевших, в том числе которым причинен тяжкий вред здоровью</li>
                <li>количество потерпевших, в том числе несовершеннолетних</li>
                <li>количество потерпевших, в том числе женщин</li>
              </ul>
            </li>
            <li><code>total</code> - количество потерпевших</li>
            <li><code>year</code> - год</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSevenContent;
