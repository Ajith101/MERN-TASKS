import React, { useState } from "react";

const App = () => {
  const contents = [
    " Lorem, ipsum  alias suscipit fdfjhf fhdbfdffbdbfbfhj ",
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sunt! In sed nemo alias suscipit voluptatibus minus necessitatibus accusamus dignissimos. Error veritatis expedita incidunt voluptates nemo aspernatur repellendus tenetur asperiores! ",
    " Lorem, ipsum dolor sit hdfhdfhbdfb ddbfjbfjdbfd dfndbfbfnbdr adipisicing elit. Quidem, ",
    " Lorem, ipsum dolor  ",
    " Lorem, ipsum dolor hhfkhfk ggfhfgfd yfyff fdbjbsfb ",
  ];

  const readMore = (text) => {
    if (text.length >= 50) {
      const results = text.slice(0, 50) + "  ...";
      return results;
    } else {
      return text;
    }
  };

  const displayItemes = contents?.map((item, id) => {
    return (
      <h1 key={id}>
        {readMore(item)}
        {item.length >= 50 ? <a href="/">Read More</a> : null}
      </h1>
    );
  });

  return (
    <>
      <div>App</div>
      {displayItemes}
    </>
  );
};

export default App;
