import React, { useState } from "react";
import ChildComponent from "./child";

const ParentComponent = () => {
  const [data, setData] = useState("");

  const handlechildData = (datafromChild) => {
    setData(datafromChild);
    console.log(data);
  };

  return (
    <>
      <p>message from child {data}</p>
      <ChildComponent onsendData={handlechildData} />;
    </>
  );
};

export default ParentComponent;
