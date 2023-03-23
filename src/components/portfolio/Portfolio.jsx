import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";
import ModalTenContent from "./modal/ModalTenContent";
import ModalElevenContent from "./modal/ModalElevenContent";
import ModalTwelveContent from "./modal/ModalTwelveContent";
import ModalThirteenContent from "./modal/ModalThirteenContent";
import ModalFourteenContent from "./modal/ModalFourteenContent";
import ModalFifteenContent from "./modal/ModalFifteenContent";



const Portfolio = () => {
  const [isModalClosed, setModalClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);


  const toggleModalOne = () => {
    setIsOpen(!isOpen);
    setModalClosed(true);
  };
  const toggleModalTwo = () => {
    setIsOpen2(!isOpen2);
    setModalClosed(true);
  };
  const toggleModalThree = () => {
    setIsOpen3(!isOpen3);
    setModalClosed(true);
  };
  const toggleModalFour = () => {
    setIsOpen4(!isOpen4);
    setModalClosed(true);
  };
  const toggleModalFive = () => {
    setIsOpen5(!isOpen5);
    setModalClosed(true);
  };
  const toggleModalSix = () => {
    setIsOpen6(!isOpen6);
    setModalClosed(true);
  };
  const toggleModalSeven = () => {
    setIsOpen7(!isOpen7);
    setModalClosed(true);
  };
  const toggleModalEight = () => {
    setIsOpen8(!isOpen8);
    setModalClosed(true);
  };
  const toggleModalNine = () => {
    setIsOpen9(!isOpen9);
    setModalClosed(true);
  };
  const toggleModalTen = () => {
    setIsOpen10(!isOpen10);
    setModalClosed(true);
  };
  const toggleModalEleven = () => {
    setIsOpen11(!isOpen11);
    setModalClosed(true);
  };
  const toggleModalTwelve = () => {
    setIsOpen12(!isOpen12);
    setModalClosed(true);
  };
  const toggleModalThirteen = () => {
    setIsOpen13(!isOpen13);
    setModalClosed(true);
  };
  const toggleModalFourteen = () => {
    setIsOpen14(!isOpen14);
    setModalClosed(true);
  };
  const toggleModalFifteen = () => {
    setIsOpen15(!isOpen15);
    setModalClosed(true);
  };

  useEffect(() => {
    if (!isModalClosed) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ВСЕ</Tab>
        <Tab>Продуктовая аналитика</Tab>
        <Tab>A/B тестирование</Tab>
        <Tab>Кластеризация</Tab>
        <Tab>Парсинг</Tab>
        <Tab>Проверка гипотез</Tab>
      </TabList>

      <div className="portfolio-tab-content blog">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalOne}>
                <img
                  src="img/projects/retention.jpeg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Retention Rate</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalOne}>
                <div className="entry-header">
                  <h3>Когортный анализ Retention Rate в приложении покупок</h3>
                </div>
              </div>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalTwo}>
                <img
                  src="img/projects/unit_economics.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Unit Economics</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalTwo}>
                <div className="entry-header">
                  <h3>Анализ и прогнозирование метрик юнит-экономики</h3>
                </div>
              </div>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalThree}>
                <img
                  src="img/projects/ltv_forecast.webp"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    Calculate and Forecasting CLV
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalThree}>
                <div className="entry-header">
                  <h3>
                    Исследование методов расчета и прогнозирования CLV (LTV)
                  </h3>
                </div>
              </div>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalFour}>
                <img
                  src="img/projects/ab_game2.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    A/B testing game currency spend
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFour}>
                <div className="entry-header">
                  <h3>
                    Анализ результатов A/B теста расходов внутриигровой валюты
                  </h3>
                </div>
              </div>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalFive}>
                <img
                  src="img/projects/ab_design.webp"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    A/B testing new website design
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFive}>
                <div className="entry-header">
                  <h3>
                    A/B тестирование нового дизайна продающей страницы сайта
                  </h3>
                </div>
              </div>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalSix}>
                <img
                  src="img/projects/split.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Split function</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalSix}>
                <div className="entry-header">
                  <h3>
                    Создание и тестирование функции разделения пользователей на
                    группы
                  </h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalEleven}>
                <img
                  src="img/projects/bootstrap.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    A/A/B Testing with Bootstrap
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalEleven}>
                <div className="entry-header">
                  <h3>A/A и A/B тестирование с помощью bootstrap</h3>
                </div>
              </div>

              {/* Start ModalTenContent */}
              <Modal
                isOpen={isOpen11}
                onRequestClose={toggleModalEleven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEleven}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalElevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalEight}>
                <img
                  src="img/projects/football.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Football Weather</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalEight}>
                <div className="entry-header">
                  <h3>
                    Влияние погоды на количество голов в матчах Английской
                    Премьер Лиги
                  </h3>
                </div>
              </div>

              {/* Start ModalEightContent */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalEightContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalNine}>
                <img
                  src="img/projects/rfm.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">RFM Segmentation</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalNine}>
                <div className="entry-header">
                  <h3>
                    Сегментирование клиентов онлайн магазина с помощью RFM Score
                  </h3>
                </div>
              </div>

              {/* Start ModalNineContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalTen}>
                <img
                  src="img/projects/kmeans.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">ML Clustering</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalTen}>
                <div className="entry-header">
                  <h3>
                    Кластеризация пользователей с помощью алгоритмов обучения
                    без учителя
                  </h3>
                </div>
              </div>

              {/* Start ModalTenContent */}
              <Modal
                isOpen={isOpen10}
                onRequestClose={toggleModalTen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalTenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTenContent */}
            </li>
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalSeven}>
                <img
                  src="img/projects/crimes2.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Offenders and Victims</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalSeven}>
                <div className="entry-header">
                  <h3>
                    Анализ признаков преступников и потерпевших в Российской
                    Федерации
                  </h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalTwelve}>
                <img
                  src="img/projects/weather.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    Football Weather Stats Scrapper
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalTwelve}>
                <div className="entry-header">
                  <h3>
                    Парсер данных о погоде на момент начала футбольных матчей
                  </h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen12}
                onRequestClose={toggleModalTwelve}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwelve}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalTwelveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalThirteen}>
                <img
                  src="img/projects/football_stat.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Football Stats Scrapper</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalThirteen}>
                <div className="entry-header">
                  <h3>Парсер статистических данных футбольных матчей</h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen13}
                onRequestClose={toggleModalThirteen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThirteen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalThirteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalFourteen}>
                <img
                  src="img/projects/cohortanalysis.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Cohort analysis in PostgreSQL</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFourteen}>
                <div className="entry-header">
                  <h3>Когортный анализ онлайн магазина в PostgreSQL</h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen14}
                onRequestClose={toggleModalFourteen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFourteen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFourteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalFifteen}>
                <img
                  src="img/projects/unit_calc_dashboard.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Unit economy calc in EXCEL</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFifteen}>
                <div className="entry-header">
                  <h3>Калькулятор юнит-экономики в Excel</h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen15}
                onRequestClose={toggleModalFifteen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFifteen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFifteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>


            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalOne}>
                <img
                  src="img/projects/retention.jpeg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Retention Rate</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalOne}>
                <div className="entry-header">
                  <h3>Когортный анализ Retention Rate в приложении покупок</h3>
                </div>
              </div>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalTwo}>
                <img
                  src="img/projects/unit_economics.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Unit Economics</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalTwo}>
                <div className="entry-header">
                  <h3>Анализ и прогнозирование метрик юнит-экономики</h3>
                </div>
              </div>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalThree}>
                <img
                  src="img/projects/ltv_forecast.webp"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    Calculate and Forecasting CLV
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalThree}>
                <div className="entry-header">
                  <h3>
                    Исследование методов расчета и прогнозирования CLV (LTV)
                  </h3>
                </div>
              </div>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalFourteen}>
                <img
                  src="img/projects/cohortanalysis.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Cohort analysis in PostgreSQL</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFourteen}>
                <div className="entry-header">
                  <h3>Когортный анализ онлайн магазина в PostgreSQL</h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen14}
                onRequestClose={toggleModalFourteen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFourteen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFourteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalFifteen}>
                <img
                  src="img/projects/unit_calc_dashboard.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Unit economy calc in EXCEL</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFifteen}>
                <div className="entry-header">
                  <h3>Калькулятор юнит-экономики в Excel</h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen15}
                onRequestClose={toggleModalFifteen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFifteen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFifteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>


          </ul>
        </TabPanel>
        {/* End Logo Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalFour}>
                <img
                  src="img/projects/ab_game2.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    A/B testing game currency spend
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFour}>
                <div className="entry-header">
                  <h3>
                    Анализ результатов A/B теста расходов внутриигровой валюты
                  </h3>
                </div>
              </div>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalFive}>
                <img
                  src="img/projects/ab_design.webp"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    A/B testing new website design
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalFive}>
                <div className="entry-header">
                  <h3>
                    A/B тестирование нового дизайна продающей страницы сайта
                  </h3>
                </div>
              </div>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalSix}>
                <img
                  src="img/projects/split.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Split function</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalSix}>
                <div className="entry-header">
                  <h3>
                    Создание и тестирование функции разделения пользователей на
                    группы
                  </h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalEleven}>
                <img
                  src="img/projects/bootstrap.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    A/A/B Testing with Bootstrap
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalEleven}>
                <div className="entry-header">
                  <h3>A/A и A/B тестирование с помощью bootstrap</h3>
                </div>
              </div>

              {/* Start ModalTenContent */}
              <Modal
                isOpen={isOpen11}
                onRequestClose={toggleModalEleven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEleven}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalElevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalNine}>
                <img
                  src="img/projects/rfm.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">RFM Segmentation</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalNine}>
                <div className="entry-header">
                  <h3>
                    Сегментирование клиентов онлайн магазина с помощью RFM Score
                  </h3>
                </div>
              </div>

              {/* Start ModalNineContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalTen}>
                <img
                  src="img/projects/kmeans.png"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">ML Clustering</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalTen}>
                <div className="entry-header">
                  <h3>
                    Кластеризация пользователей с помощью алгоритмов обучения
                    без учителя
                  </h3>
                </div>
              </div>

              {/* Start ModalTenContent */}
              <Modal
                isOpen={isOpen10}
                onRequestClose={toggleModalTen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalTenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTenContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure className="vh-25" onClick={toggleModalTwelve}>
                <img
                  src="img/projects/weather.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">
                    Football Weather Stats Scrapper
                  </span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalTwelve}>
                <div className="entry-header">
                  <h3>
                    Парсер данных о погоде на момент начала футбольных матчей
                  </h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen12}
                onRequestClose={toggleModalTwelve}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwelve}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalTwelveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure className="vh-25" onClick={toggleModalThirteen}>
                <img
                  src="img/projects/football_stat.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Football Stats Scrapper</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalThirteen}>
                <div className="entry-header">
                  <h3>Парсер статистических данных футбольных матчей</h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen13}
                onRequestClose={toggleModalThirteen}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThirteen}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalThirteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalEight}>
                <img
                  src="img/projects/football.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Football Weather</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalEight}>
                <div className="entry-header">
                  <h3>
                    Влияние погоды на количество голов в матчах Английской
                    Премьер Лиги
                  </h3>
                </div>
              </div>

              {/* Start ModalEightContent */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalEightContent */}
            </li>
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure className="vh-25" onClick={toggleModalSeven}>
                <img
                  src="img/projects/crimes2.jpg"
                  alt="Portolio"
                  className="max-height"
                />
                <div className="hover-content-wrapper">
                  <span className="content-title">Offenders and Victims</span>
                </div>
              </figure>
              <div className="post-content" onClick={toggleModalSeven}>
                <div className="entry-header">
                  <h3>
                    Анализ признаков преступников и потерпевших в Российской
                    Федерации
                  </h3>
                </div>
              </div>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
                ariaHideApp={false}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="img/cancel2.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner blog-post mt-5">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
