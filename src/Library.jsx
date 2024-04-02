import React from "react";
import { useDataContext } from "./DataContext";
import Li from "./components/Li";
const Library = () => {
  const { authors, books } = useDataContext();
  return (
    <div>
      <div className="">
        <ul>
          {authors.map((ele, index) => (
            <Li ele={ele} key={index} />
          ))}
        </ul>
      </div>
      <div className="">
        <ul>
          {books.map((ele, index) => (
            <Li ele={ele} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
