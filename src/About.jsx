import React from "react";
import "./About.css";
import { BsBookHalf } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <div className="About">
      <div className="lib">
        <div className=" hedd">
          <h1 className="x">About MyLibary</h1>
          <p className="pp">
            <b>MyLibary</b> is a digital libary platform that <br />
            connects reders with a vaset collection of <br />
            book sfrom variouse genres ND Cteoris.
          </p>
          <p className="pp">
            <b>Our</b> mission is to promote reading and make <br />
            knowledge accessible to everyonee, everywhere.
          </p>
        </div>{" "}
        <div className="img4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDg07awQXhewqEWMNHco7056PZPYKqmWXn8i1atberPg&s=10"
            alt=""
          />
        </div>
      </div>
      <br />
      <br /><br /><br />
      <div className="crdx">
        <div className="box0">
          <BsBookHalf className=" p" />

          <h1>Our Collection</h1>
          <p>
            We offer thousendes of books <br />
            Across multiple categoris.
          </p>
        </div>
        <div className="box0">
          <IoMdContacts className="p" />

          <h1>Our Vision</h1>
          <p>
            To build s community of <br />
            lifelong readers.
          </p>
        </div>
        <div className="box0">
          <VscWorkspaceTrusted className="p" />

          <h1>Quality & Trust</h1>
          <p>
            We ensure quality content, <br />
            qnd a sefe reding experince.
          </p>
        </div>
        <div className="box0">
          <FaHeadset className="p" />

          <h1>24/7 Support</h1>
          <p>
            We are here to help you <br />
            anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
