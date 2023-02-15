import React from "react";
import pythonImg from './img/python-5.svg';
import pandasImg from './img/pandas2.png';
import sqlImg from './img/SQL.svg';
import matplotImg from './img/matplot.svg';
import tableauImg from './img/tableau.svg';


const experienceContent = [
  {
    position: "PYTHON",
    details: `Структуры и типы данных языка, основы объектно ориентированного, 
    функционального и асинхронного программирования, многопоточность и мультипроцессинг,
    конечные автоматы`,
    img: pythonImg,
  },
  {
    position: "PANDAS",
    details: `Структуры и типы данных использующиеся для анализа табличных данных,
    очистка данных, сводные таблицы и аггрегирование, работа с временными рядами`,
    img: pandasImg,
  },
  {
    position: "SQL",
    details: `Работа с группами операторов DML - подзапросы, CTE, 
    временные таблицы, оконные функции. DDL - создание/удаление таблиц, баз данных. Основы столбцовой СУБД clickhouse`,
    img: sqlImg,
  },
  {
    position: "Визуализация данных",
    details: `Библиотеки matplotlib, seaborn, plotly`,
    img: matplotImg,
  },
  {
    position: "Business intelligence (BI)",
    details: `Создание дашбордов с помощью Tableau, Superset, DataLens, Dash`,
    img: tableauImg,
  },
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
