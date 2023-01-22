import './App.css';
import Header from './components/header'
import QuestionAns from './components/question_ans'
import CodeSection from './components/CodeSection'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element = {<QuestionAns/>}/>
        <Route path="/compete" element = {<CodeSection/>}/>
        <Route path="/codesection" element = {<CodeSection/>}/>
      </Routes>
    </div>
    );
}

export default App;
