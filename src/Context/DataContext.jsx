import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
const DataContext = ({ children }) => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTools(data);
      });
  }, []);
//   useEffect(() => {
//     fetch("tools.json")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         seeAllTools(data);
//       });
//   }, []);
  const data = {
    tools,
  };
  return (
    <div>
      <ApiContext.Provider value={data}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
