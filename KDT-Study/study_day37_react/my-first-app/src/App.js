import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <BtnToNaver/>
      <br/>
      <p>functional State</p>
      <FunctionalState/>
      <p>Class State</p>
      <ClassState/>
      <ImgComponent/>
    </div>
  );
}

export default App;
