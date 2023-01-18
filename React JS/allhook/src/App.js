import "./App.css";
import {BrowserRouter as Router,Routes as Switch,Route} from "react-router-dom";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
function App() {
  return (
    <>
      {/* <h1>Hello</h1> */}
    <Router>
      <Switch>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      </Switch>
    </Router>
    </>

  );
}

export default App;
