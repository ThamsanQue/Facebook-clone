import "./App.css";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";
import { useStateValue } from "./ContextApi/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
