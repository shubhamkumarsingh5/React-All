import React from "react";

const ChildComponent = ({ onsendData }) => {
  return (
    <div>
      <button onClick={() => onsendData("greetings from child")}>
        pass data to parent
      </button>
    </div>
  );
};

export default ChildComponent;
