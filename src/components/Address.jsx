import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <a href="mailto:max_perepelyuk@mail.ru">
          <i className="fa fa-envelope-open position-absolute"></i>
          <span className="d-block">mail me</span>{" "}
          max_perepelyuk@mail.ru
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <a href="https://t.me/ngc1554" target="_blank" rel="noreferrer">
          <i className="fa fa-telegram position-absolute"></i>
          <span className="d-block">Telegram</span>{" "}
          @ngc1554
        </a>
      </p>
      {/* End .custom-span-contact */}
      <p className="open-sans-font custom-span-contact position-relative">
        <a href="https://vk.com/id17543805" target="_blank" rel="noreferrer">
          <i className="fa fa-vk position-absolute"></i>
          <span className="d-block">Vkontakte</span>{" "}
          https://vk.com/id17543805
        </a>
      </p>
    </>
  );
};

export default Address;
