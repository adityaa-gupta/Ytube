import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

export default function Home() {
  const [view, setView] = useState(false);
  return (
    <div>
      <Navbar view={view} setView={setView} />
      {view && <Sidebar isOpen={view} />}
    </div>
  );
}
