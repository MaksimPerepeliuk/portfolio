import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="233, 75, 60"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      /> */}
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
