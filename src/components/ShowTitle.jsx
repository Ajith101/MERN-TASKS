import React, { useEffect, useState } from "react";
// import Title from "./Title";

const Title = () => {
  useEffect(() => {
    const intervel = setInterval(() => {
      console.log("It is just UnMonuted");
    }, 2000);

    return () => clearInterval(intervel);
  }, []);

  return <div className="show-title">Title</div>;
};

const ShowTitle = () => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <>
      <div className="toogle">
        {showTitle && <Title />}

        <button className="btn" onClick={() => setShowTitle(!showTitle)}>
          Click Here
        </button>
      </div>
    </>
  );
};

export default ShowTitle;
