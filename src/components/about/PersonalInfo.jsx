import React from "react";

const personalInfoContent = [
  { meta: "Имя", metaInfo: "Максим" },
  { meta: "Фамилия", metaInfo: "Перепелюк" },
  { meta: "Возраст", metaInfo: "30 лет" },
  { meta: "город", metaInfo: "Москва, Россия" },
  { meta: "Email", metaInfo: "max_perepelyuk@mail.ru" },
  { meta: "Telegram", metaInfo: <a href="https://t.me/ngc1554" target="_blank" rel="noreferrer">@ngc1554</a> },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
