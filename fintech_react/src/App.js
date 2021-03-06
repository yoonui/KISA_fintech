import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ListPage from "./pages/ListPage"
import Header from "./components/Header"
import AxiosTest from "./pages/axiosTest"
import NewsPage from './pages/NewsPage';
import ApiExample from "./pages/ApiExample"
import HospitalList from "./pages/HospitalList"
import HospitalDetail from "./pages/HospitalDetail"
import CipherTest from './pages/CipherTest';
import CarInfo from './pages/CarInfo';
import InsurePage from './pages/InsurePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/header" exact>
          <Header title="hello router"></Header>
        </Route>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsPage></NewsPage>
        </Route>
        <Route path="/api" exact>
          <ApiExample></ApiExample>
        </Route>
        <Route path="/hospital" exact>
          <HospitalList></HospitalList>
        </Route>
        <Route path="/hospitalDetail" exact>
          <HospitalDetail></HospitalDetail>
        </Route>
      </Switch>
        <Route path="/enTest" exact>
          <CipherTest></CipherTest>
        </Route>
        <Route path="/carinfo" exact>
          <CarInfo></CarInfo>
        </Route>
        <Route path="/insure" exact>
          <InsurePage></InsurePage>
        </Route>
    </Router>
  );
}

export default App;