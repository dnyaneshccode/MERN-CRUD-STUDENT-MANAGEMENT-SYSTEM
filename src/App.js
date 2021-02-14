import Navbar from './components/Navbar';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/PAGES/Home';
import About from './components/PAGES/About';
import Contact from './components/PAGES/Contact';
import Notfound from './components/PAGES/Notfound';
import AddEmployee from './components/employees/AddEmployee';
import EditEmployee from './components/employees/EditEmployee';
import Employees from './components/employees/Employees';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/employee/add' component={AddEmployee}></Route>
          <Route exact path='/employee/edit/:id' component={EditEmployee}></Route>
          <Route exact path='/employee/:id' component={Employees}></Route>
          
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
