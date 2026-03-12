import "./assets/css/css.css";
import Header from "./components/Header";
import ManhvaInfo from "./components/manhvainfo";
import HomePage from "./components/page/HomePage";
import CategoryGoInfo from "./components/categorygoinfo";
import ReadManhva from "./components/page/read";
import { Routes, Route } from 'react-router-dom';
import LoadingPost from "./components/loadingPost";
import ReadManhva1 from "./components/page/read1";
import ManhvaRecInfo from "./components/ManhvaRecInfo";

function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/Category" element={<CategoryGoInfo />} />
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Info/:id" element={<ManhvaInfo/>}/>
      <Route path="/rec.info/:id" element={<ManhvaRecInfo/>}/>
      <Route path="/rec.read/:id" element={<ReadManhva1/>}/>
      <Route path="/Read/:id" element={<ReadManhva />} />
      <Route path="/loading" element={<LoadingPost/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
