import React from "react";

const PROJECTS_CNT = 13;

const Skills = () => {
  return (
    <>
      <div className="col-12">
        <div className="about-text">
          <p>Привет! Меня зовут Максим и я начинающий аналитик данных!</p>
          <p>С основами науки о данных я решил познакомиться исключительно для утоления любознательности, но много времени не понадобилось, чтобы новое увлечение стало моим <span title="франц. Совокупность взглядов, представлений и убеждений, выражающих мировозрение" className="def">profession de foi!</span> Я решил полностью посвятить себя этой профессии и стал искать возможности для более глубокого изучения.</p>
          <p>В октябре 2022 года с помощью проекта <a href="https://cat.2035.university/rall/?project_id=48" target="_blank" rel="noreferrer">“Цифровые профессии”</a> я получил возможность обучения на программах дополнительного образования в сфере цифровых технологий с оплатой 50% стоимости и выбрал профессию “Аналитик данных” в Яндекс Практикуме.</p>
          <p>В июне 2022 года я закончил профессию, результатом прохождения которой стали 12 проектов и базовая теоретическая подготовка.</p>
          <p>После обучения по профессии, я не остановился и продолжил самостоятельное обучение. На основе приобретенных знаний я выполнил {PROJECTS_CNT} самостоятельных проектов, с которыми можно ознакомиться во вкладке портфолио или в репозитории на GitHub.</p>
          <p>Я открыт для общения. По любым вопросам можно обращаться по контактам указанным в соответствующем разделе.</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
