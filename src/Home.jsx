import React from "react";
import "./Home.css";
import { BsBookHalf } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="tital">
        <div className="left">
          <h1 className="h">
            Welcome to <br />
            MyLibrary
          </h1>

          <p>
            Yor one-stop place to discover,
            <br />
            rea and explore books.
          </p>
          <br />
          <button className="but">Browse Books</button>
        </div>
        <div><img  className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NxAUi8CcQ3kZ98TBkc5TsSK-TA6SOTm26OUROjM5Dg&s=10" alt="" /></div>
      </div><br /><br />
      <div className="crd">
      <div className="box">
        

        <h1>Huge Collection</h1>
        <p>
          THousands of books <br />
          for every reader.
        </p>
       
      </div>
      <div className="box">
        <h1>All Categories</h1>
        <p>Fiction,Nōn-Function, <br />Academic and more.</p>
      </div>
      <div className="box">
        <h1>Alwayes Available</h1>
        <p>Access anytime, <br />anywhere.</p>
      </div>
      </div>
    </div>
  );
};

export default Home;
