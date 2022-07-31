import './App.css';
import Navbar from "./MyComponents/Navbar.js";
import Slider from "./MyComponents/Slider.js"
import data from "../src/data/data.json"
import Heading from "./MyComponents/Heading.js";
import NoticeSpace from "./MyComponents/Noticespace.js";
import Resultspace from "./MyComponents/Resultspace.js";
import Studyspace from "./MyComponents/Studyspace.js";
import Examspace from "./MyComponents/Examspace.js";
import Internspace from "./MyComponents/Internspace.js";
import HotAccessories from "./MyComponents/HotAccessories.js";
import Footer from "./MyComponents/Footer.js"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar/>
      <Slider />

      <Heading text={"NOTICE SPACE"}/>
      <NoticeSpace />
      <Routes>
        <Route path="/university" element={<HotAccessories music={data.hotAccessories.music}  />} />
        <Route path="/hostel" />
      </Routes>
      
      <Heading text={"RESULT SPACE"} />
      <Resultspace/>
      <Routes>
        <Route path="/2019result" element={<HotAccessories music={data.hotAccessories.music}  />} />
        <Route path="/2020result" />
        <Route path="/2021result" />
        <Route path="/2022result" element={<HotAccessories music={data.hotAccessories.music} />} />
      </Routes> 

      <Heading text="STUDY SPACE" />
      <Studyspace/>
      <Routes>
        <Route path="/coe" element={<HotAccessories music={data.hotAccessories.music}  />} />
        <Route path="it" />
        <Route path="/se" />
        <Route path="/mce" />
        <Route path="/ece" />
        <Route path="/ee" />
        <Route path="/me" />
        <Route path="/pe" />
        <Route path="/mae" />
        <Route path="/civil" />
        <Route path="/chemical" />
        <Route path="/pct" />
        <Route path="/ep" />
        <Route path="/ene" />
        <Route path="/bt" />
      </Routes>

      <Heading text="EXAM SPACE" />
      <Examspace/>
      <Routes>
        <Route path="/coeexam" element={<HotAccessories music={data.hotAccessories.music}  />} />
        <Route path="itexam" />
        <Route path="/seexam" />
        <Route path="/mceexam" />
        <Route path="/eceexam" />
        <Route path="/eeexam" />
        <Route path="/meexam" />
        <Route path="/peexam" />
        <Route path="/maeexam" />
        <Route path="/civilexam" />
        <Route path="/chemicalexam" />
        <Route path="/pctexam" />
        <Route path="/epexam" />
        <Route path="/eneexam" />
        <Route path="/btexam" />
      </Routes>

      <Heading text="INTERN / PLACEMENT SPACE" />
      <Internspace/>
      <Routes>
        <Route path="/intern" element={<HotAccessories music={data.hotAccessories.music} />} />
        <Route path="/placement" />
      </Routes>


      <Footer/>

      
    </Router>
    
    
  );
}

export default App;
