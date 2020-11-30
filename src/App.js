import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CountryPage from "./CountryPage";
import { Route, Switch, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 400) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });
  return (
    <div className={`app ${darkMode ? "app__dark" : "app__light"}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sticky={stickyNav}
      />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/:country" component={CountryPage} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
