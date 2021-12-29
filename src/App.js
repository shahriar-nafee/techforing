import { Provider } from "react-redux";
import "./App.css";
import Main from "./Main";
import { store } from "./_redux/store";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
