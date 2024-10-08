import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Starter from "./views/Starter";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <div className="pageWrapper d-lg-flex">
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Routes>
            <Route path="/" element={<Navigate to={"/starter"} />} />
            <Route path="/starter" element={<Starter />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
};

export default App;
