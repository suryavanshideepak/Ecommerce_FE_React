import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import MyRoute from "./routes";

function App() {
  return (
    <div style={{background:'linear-gradient(rgb(253, 233, 242) 0%, rgb(253, 240, 232) 100%, rgb(253, 240, 232) 100%)'}}>
      <MyRoute/>
    </div>
  );
}

export default App;
