import { useState } from "react";
import Navbar from "./components/navbar/Nav";
import Sidebar from "./components/sidebar/Sidebar";

const App =()=> {

  const [sidebarOpen,setSidebarOpen]=useState(false);

  const openSidebar =()=>{

    setSidebarOpen(true);

  }

  const closeSidebar =()=>{
    setSidebarOpen(false);

  }

  return (
    <div className="Container">
      <Navbar  sidebarOpen={sidebarOpen} openSidebar={openSidebar }/>

      <h1>REACT DASHBOARD </h1>

      <Sidebar  sidebarOpen={sidebarOpen} closeSidebar={closeSidebar }/>

    </div>
  );
}

export default App;
