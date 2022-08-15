import '../sass/App.scss'
import { Routes, Route} from "react-router-dom";
import Header from '../components/GenericComponents/Header';
import EmployeesList from '../Pages/EmployeesList';
import Home from '../Pages/Home';
import Page404 from '../Pages/404';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-employee" element={<EmployeesList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
