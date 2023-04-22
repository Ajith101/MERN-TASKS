import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";

const UserList = () => {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return setUser(response?.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (username) => {
    const response =
      user &&
      user.filter((item) => {
        return item.username !== username;
      });
    setUser(response);
  };

  const displayDatas =
    user &&
    user.map((item, id) => {
      return (
        <li key={id}>
          <h2>
            {" "}
            {id + 1}
            {".) "}
            {item.username}
          </h2>
          <span onClick={() => deleteUser(item.username)}>x</span>
        </li>
      );
    });

  return (
    <>
      <div className="user-section">
        <h1>User Details</h1>
        <div className="line"></div>
        <ul>{displayDatas}</ul>
        {user?.length === 0 && (
          <div className="accordion">Sorry No Itemes Found</div>
        )}
      </div>
    </>
  );
};

export default UserList;
