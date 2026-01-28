import React, { Suspense } from "react";

const VuePage = React.lazy(() => import("mfeVue/App"));
const ReactPage = React.lazy(() => import("mfeReact/App"));

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <h2>Shell App</h2>
      <ReactPage />
      <div id="vue-container">
        <VuePage />
      </div>
    </Suspense>
  );
}
