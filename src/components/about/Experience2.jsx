import React from "react";
import numpyImg from './img/numpy.png';
import scipyImg from './img/scipy.png';
import sklearn from './img/sklearn.svg';
import bsImg from './img/bs.jpg';




const experienceContent = [
  {
    position: "Numpy",
    details: `Математические вычисления, генерация распределений и случайных данных`,
    img: numpyImg,
  },
  {
    position: "Статистический анализ",
    details: `Описательная статистика, статистический вывод с помощью библиотек SciPy, Statsmodels`,
    img: scipyImg,
  },
  {
    position: "Машинное обучение",
    details: `Знание основ библиотеки scikit-learn. Обучение с учителем для задач регрессии 
    и классификации, обучение без учителя для кластеризации и уменьшения размерности.
    Основные метрики для оценки моделей`,
    img: sklearn,
  },
  {
    position: "Сбор данных",
    details: `Сбор данных с помощью программного интерфейса приложений (API), 
    парсинг с помощью библиотек Beautiful Soup, Selenium, основы HTTP и библиотека Requests`,
    img: bsImg,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon black-bg">
            <img src={val.img} alt="" />
          </div>
          <h5 className="poppins-font text-uppercase">
            {val.position}
          </h5>
          <p>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
