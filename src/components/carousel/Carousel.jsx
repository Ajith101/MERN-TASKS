import React, { useEffect, useState } from "react";
import newCss from "./carousel.module.css";

const Carousel = () => {
  const carouselDatas = [
    {
      img: "https://images.unsplash.com/photo-1681532639984-edb0790487d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80",
      title: "Title 1",
    },
    {
      img: "https://images.unsplash.com/photo-1654124803203-8ef9f155d60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Title 2",
    },
    {
      img: "https://images.unsplash.com/photo-1681488320552-ead055d0f167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Title 2",
    },
    {
      img: "https://images.unsplash.com/photo-1681688530775-ccf400d48c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Title 3",
    },
    {
      img: "https://images.unsplash.com/photo-1681457550293-5a516cb5dedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      title: "Title 4",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentPage((preState) =>
        preState === carouselDatas.length - 1 ? 0 : preState + 1
      );
    }, 3000);
    return () => clearInterval(intervel);
  }, []);

  function previous() {
    if (currentPage === 0) {
      setCurrentPage(carouselDatas.length - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }
  function next() {
    if (currentPage === carouselDatas.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className={newCss.carousel}>
      <h1>Image Carousel</h1>
      <span></span>
      <div className={newCss.images}>
        <img src={carouselDatas[currentPage].img} alt="" />
      </div>
      <h2>{carouselDatas[currentPage].title}</h2>
      <div className={newCss.pagecontroll}>
        <button onClick={() => previous()}>-</button>
        <button onClick={() => next()}>+</button>
      </div>
    </div>
  );
};

export default Carousel;
