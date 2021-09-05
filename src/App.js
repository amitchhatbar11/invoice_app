import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
