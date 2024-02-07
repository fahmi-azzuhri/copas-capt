import React from "react";
import { Navbars } from "./components/Navbars";
import Text from "./components/Text";

const App = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md max-w-[620px] mx-auto">
      <Navbars />
      <Text />
    </div>
  );
};

export default App;
