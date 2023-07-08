import React from "react";
import img1 from "../../assets/images/Members/photo_6273684233239246479_y.jpg";
import img2 from "../../assets/images/Members/IMG20230115162916.jpg";
import img3 from "../../assets/images/Members/photo_6118348524706969391_y.jpg";
import img4 from "../../assets/images/Members/anmol.jpg";
import img5 from "../../assets/images/Members/photo_6136568098099149933_y.jpg";
import MembersCss from "./Members.css";
import LinkedIn from "../../assets/images/Members/pngwing.com.png";
import Twitter from "../../assets/images/Members/pngwing3.com.png";

const Card = ({ imageSrc, text, contri, LinkedInLink, TwitterLink }) => {
  return (
    <div
      className="flex flex-col items-center justify-evenly max-w-sm overflow-hidden shadow-lg mx-20 px-5 my-5 h-[450px] w-[320px] eff rounded-[30px]  bg-[#FFF5EE]"
      style={{ MembersCss }}
    >
      <div>
        <img
          src={imageSrc}
          alt="Card"
          className="h-[275px] w-[305px] rounded-[30px] mt-2 border-black object-center"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-black-700 text-2xl mt-[10px] text-center font-bold font-style font">
          {text}
        </p>
        <p className="text-black-700 text-[15px] mt-[0px] text-center font-sans font font-semibold">
          {contri}
        </p>
        <div className="flex justify-center mt-4 gap-10 ">
          <a
            href={LinkedInLink}
            target="_blank"
            className="hover-underline-animation"
          >
            <img
              src={LinkedIn}
              alt="Logo"
              className="h-[40px] hover:cursor-pointer  "
            ></img>
          </a>
          <a
            href={TwitterLink}
            target="_blank"
            className="hover-underline-animation"
          >
            <img
              src={Twitter}
              alt="Logo"
              className="h-[38px] hover:cursor-pointer "
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const cards1 = [
    {
      imageSrc: img1,
      text: "AKSHIT NANDAN",
      contri: "Backend Developer",
      LinkedInLink: "https://www.linkedin.com/in/kuldeepsinh-jhala-0b9028257/",
      TwitterLink: "https://twitter.com/AkshitNandan",
    },
    {
      imageSrc: img2,
      text: "ADITYA RAJ",
      contri: "Frontend Developer",
      LinkedInLink: "https://www.linkedin.com/in/kuldeepsinh-jhala-0b9028257/",
      TwitterLink: "https://twitter.com/AkshitNandan",
    },
    {
      imageSrc: img3,
      text: "KULDEEP JHALA",
      contri: "Frontend Developer",
      LinkedInLink: "https://www.linkedin.com/in/kuldeepsinh-jhala-0b9028257/",
      TwitterLink: "https://twitter.com/AkshitNandan",
    },
  ];
  const cards2 = [
    {
      imageSrc: img5,
      text: "PRASHIK PAGARE",
      contri: "Frontend Developer",
      LinkedInLink: "https://www.linkedin.com/in/kuldeepsinh-jhala-0b9028257/",
      TwitterLink: "https://twitter.com/AkshitNandan",
    },
    {
      imageSrc: img4,
      text: "ANMOL NAG",
      contri: "Frontend Developer",
      LinkedInLink: "https://www.linkedin.com/in/kuldeepsinh-jhala-0b9028257/",
      TwitterLink: "https://twitter.com/AkshitNandan",
    },
  ];

  return (
    <div className="back w-screen mt-20 -mb-36 pb-56  top-32 -z-10">
      <div className="flex flex-col items-center text-center w-full py-32 heading font-thin">
        <div>
          <p>Get in Touch</p>
          <p className="w-fit heading font-gordi contri hover-underline-animation font-bold">
            Contributors
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <div className="flex flex-wrap justify-center">
          {cards1.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              text={card.text}
              contri={card.contri}
              LinkedInLink={card.LinkedInLink}
              TwitterLink={card.TwitterLink}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {cards2.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              text={card.text}
              contri={card.contri}
              LinkedInLink={card.LinkedInLink}
              TwitterLink={card.TwitterLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
