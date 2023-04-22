import React, { useState } from "react";
import Cards from "./Cards";
import Header from "./Header";
import "./Faq.css";

const Accordion = () => {
  const datas = [
    {
      title: "How does React works",
      decription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolor corrupti minima recusandae consectetur cupiditate animi optio dolore repudiandae, tempora sed natus quia deserunt laboriosam cumque voluptate quam sapiente. ",
    },
    {
      title: "How does React works",
      decription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolor corrupti minima recusandae consectetur cupiditate animi optio dolore repudiandae, tempora sed natus quia deserunt laboriosam cumque voluptate quam sapiente. ",
    },
    {
      title: "How does React works",
      decription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolor corrupti minima recusandae consectetur cupiditate animi optio dolore repudiandae, tempora sed natus quia deserunt laboriosam cumque voluptate quam sapiente. ",
    },
    {
      title: "How does React works",
      decription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolor corrupti minima recusandae consectetur cupiditate animi optio dolore repudiandae, tempora sed natus quia deserunt laboriosam cumque voluptate quam sapiente. ",
    },
    {
      title: "How does React works",
      decription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolor corrupti minima recusandae consectetur cupiditate animi optio dolore repudiandae, tempora sed natus quia deserunt laboriosam cumque voluptate quam sapiente. ",
    },
  ];

  const [currentItem, setCurrentIteme] = useState(null);
  const [accordionData, setAccordionData] = useState(datas);

  const toogleBTN = (id) => {
    currentItem === id ? setCurrentIteme(null) : setCurrentIteme(id);
  };

  return (
    <>
      <Header />
      <div className="main-body">
        <div className="title">
          <h1>FAQ </h1>
          <span></span>
        </div>
        <div className="container">
          {accordionData.map((item, id) => {
            return (
              <Cards
                toogleBTN={() => toogleBTN(id)}
                item={item}
                key={id}
                isActive={currentItem === id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
