import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import { Home } from "./components/Home";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
    </Routes>
  );
};

export default App;
