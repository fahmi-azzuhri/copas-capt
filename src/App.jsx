import React from "react";
import { Navbars } from "./components/Navbars";
import Text from "./components/Text";

const App = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mx-auto md:max-w-[620px] lg:max-w-[620px]">
      <Navbars />
      <Text />
    </div>
  );
};

export default App;
