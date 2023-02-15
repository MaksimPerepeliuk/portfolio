import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><b>Анализ результатов A/B теста расходов внутриигровой валюты</b></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-github pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/tree/main/ab_test_analysis_game_currency_spending" target="_blank" rel="noreferrer">Github repo</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-book pr-2"></i>
              <span className="project-label"><a className="project-link" href="https://github.com/MaksimPerepeliuk/data_analysis/blob/main/ab_test_analysis_game_currency_spending/ab_test_gamedev.ipynb" target="_blank" rel="noreferrer">Jupyter Notebook</a></span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-gear pr-2"></i>
              <span className="project-label">Технологии и инcтрументы </span>:{" "}
              <span className="ft-wt-600 uppercase">pandas, numpy, matplotlib, scipy, seaborn, A/B тестирование, множественные проверки гипотез</span>
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
            Игра содержит особое событие – ивент, для прохождения которого пользователи могут 
            тратить внутриигровую валюту (колонка gold_on_event). Группа дизайнеров решила поменять 
            вид окошка покупки ивентовых продуктов. Чтобы оценить результат нововведения, провели 
            АБ тест, разделив пользователей на две группы: контрольную и тестовую (с окошком нового типа).
          </p>
          <h3>Задачи исследования</h3>
          <ul>
            <li>Исследовать какая из A/B групп лучше себя показала по результатам проведенного теста</li>
          </ul>
          <h3>Исходные данные</h3>
          <ul>
            <li><code>AbGroup</code> - имя АБ группы: Control/Test</li>
            <li><code>user_id</code> - id пользователя</li>
            <li><code>time_stamp</code> - дата события</li>
            <li><code>install_date</code> - дата установки приложения пользователем</li>
            <li><code>event_name</code> - техническое название события (InAppPurchase - в случае покупки за деньги, ResourceSpend в случае покупки за игровую валюту)</li>
            <li><code>platform</code> - платформа google / itunes</li>
            <li><code>network_name</code> - пользователь установил игру по переходу с рекламы (Paid) или нет (Organic)</li>
            <li><code>country_name</code> - страна пользователя</li>
            <li><code>InGameTime</code> - сколько всего пользователь провел в игре секунд</li>
            <li><code>LastCompletedLevel</code> - номер последнего пройденного уровня</li>
            <li><code>avg_energy_amount</code> - сколько в среднем энергии было у пользователя за день</li>
            <li><code>revenue_on_event</code> - ревеню, потраченное на покупку ивентовых продуктов</li>
            <li><code>revenue_on_other_activities</code> - ревеню, потраченное на остальные продукты, включая золото</li>
            <li><code>gold_on_event</code> - золото, потраченное на ивентный прогресс</li>
            <li><code>gold_on_other_activities</code> - золото, потраченное на другие продукты</li>
          </ul>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
