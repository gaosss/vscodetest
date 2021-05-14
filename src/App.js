import './App.css';
import HelloReact from "./components/MybidPage";
import {Provider} from "react-redux"; // 引入Provider组件
import OriginalPage from "./components/OriginalPage";
import store from "./redux/initializeRedux";
import {
    BrowserRouter as Router, NavLink,
    Route
} from 'react-router-dom';
import UserPage from "./components/MybidPage";
function App() {
  return (
      <Provider store={store}>
          <HelloReact/>
          <OriginalPage/>

          <Router>
              <div>


              </div>
          </Router>


      </Provider>
  );
}

export default App;
