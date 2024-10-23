import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
