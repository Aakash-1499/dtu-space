import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./MyComponents/Navbar.js";
import Slider from "./MyComponents/Slider.js";
import Heading from "./MyComponents/Heading.js";
import NoticeSpace from "./MyComponents/Noticespace.js";
import HotAccessories from "./MyComponents/HotAccessories.js";
import Footer from "./MyComponents/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getResults } from "./services/space-service";
import { groupBy } from "lodash";
function App() {
  const [result, setData] = useState();
  const [categories, setCategories] = useState({});
  useEffect(() => {
    getResults().then((data) => {
      data.json().then((res) => {
        setData(res);
      });
    });
  }, []);
  useEffect(() => {
    console.log(result);
    if (result && result.data) {
      const categoriesGrouped = groupBy(result.data, "category");
      Object.entries(categoriesGrouped).map(([key, value]) => {
        categoriesGrouped[key] = groupBy(value, "subCategory");
      });
      Object.entries(categoriesGrouped).map(([key, value]) => {
        console.log("key:", key, "\nvalue:", value);
      });
      setCategories(categoriesGrouped);
    }
  }, [result]);



  return (
    <Router>
      <Navbar />
      <Slider />
      {Object.entries(categories).map(([key, value]) => {
        return (
          <div className="">
            <Heading text={key} />
            <NoticeSpace subCategories={value} />
            {Object.entries(value).map(([key, value]) => {
              return (<Routes>
                <Route
                  path={"/"+key}
                  element={<HotAccessories music={value} />}
                />
              </Routes>);
            })}
          </div>
        );
      })}
      <Footer />
    </Router>
  );
}

export default App;
