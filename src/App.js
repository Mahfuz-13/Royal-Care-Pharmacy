import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact us/Contact";
import About from "./components/About us/About";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact/us">
            <Contact></Contact>
          </Route>
          <Route path="/about/us">
            <About></About>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
