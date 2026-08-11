import React from "react";
import "./Book.css";
const Book = () => {
  return (
    <div className="t">
      <h1 className="T">All Book</h1>
      <br />
      <div className="card">
        <div className="boxs">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpgiK3Nrd7IAP-2jF77WV0FkzfUL2TAM9jEDFljO6tg&s=10" alt="" className="img2" />
          <h1>The Alchemist</h1>
          <p>Paulo Coelho</p>
          <br />
          <button className="bot">Add To Cart</button>
          <br />
          <br />
          <button className="bot1">Interested</button>
        </div>
        <div className="boxs">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhWdDm01_YMOl4p0rVj_OWyD60lL_WjWXAjtJ1B7MxQ&s=10" alt="" className="img2" />
          <h1>Atomic Habits</h1>
          <p>james Clear</p>
          <br />
          <button className="bot">Add To Cart</button>
          <br />
          <br />
          <button className="bot1">Interested</button>
        </div>
        <div className="boxs">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCXbxfDWulYRgr9FdUZ9boJa_LsTl1tFgpLsey-TEpA&s=10" alt="" className="img2" />
            <h1>The Power of Your </h1>
            <p>Joseph Murphy</p><br />
          <button className="bot">Add To Cart</button>
          <br />
          <br />
          <button className="bot1">Interested</button>
        </div>
        <div className="boxs">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkHWl0joqZ7_v4GTe4NArBxq0_QobVBU9wwr1PdtjGQ&s=10" alt="" className="img2" />
          <h1>Rich Dad Poor Dad</h1>
          <p>Robet T. Kiyosaki</p><br />
          <button className="bot">Add To Cart</button>
          <br />
          <br />
          <button className="bot1">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
