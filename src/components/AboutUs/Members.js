import React from 'react';
import img1 from '../../assets/images/Members/photo_6273684233239246479_y.jpg'
import img2 from '../../assets/images/Members/IMG20230115162916.jpg'
import img3 from '../../assets/images/Members/photo_6118348524706969391_y.jpg'
import MembersCss from './Members.css'
import LinkedIn from '../../assets/images/Members/pngwing.com.png'
import Twitter from '../../assets/images/Members/pngwing3.com.png'


const Card = ({ imageSrc, text, contri }) => {
    
  return (
    <div className="max-w-sm overflow-hidden shadow-lg mx-20 my-5 h-[500px] w-[320px] eff rounded-[30px] border-[1px] bg-[#FFF5EE]" 
    style={{MembersCss}}>
      
      <img src={imageSrc} alt="Card" className="h-[350px] w-[305px] ml-2 rounded-t-[30px] mt-2 border-[1px] border-black"/>
      <p className="text-black-700 text-2xl mt-[10px] text-center font-bold font-style font">{text}</p>
      <p className="text-black-700 text-[15px] mt-[0px] text-center font-sans font">{contri}</p>
      <div className='flex mt-4 hover-underline-animation'>
      <img src={LinkedIn} alt="Logo" className='h-[40px] ml-24 '></img>
      <img src={Twitter} alt="Logo" className='h-[38px] ml-10'></img>
      </div>
      
  </div>
  );
};

const Members = () => {
  const cards1 = [
    {
      imageSrc: img1 ,
      text: 'AKSHIT NANDAN',
      contri:'Backend Developer'
    
    },
    {
      imageSrc: img2,
      text: 'ADITYA RAJ',
      contri:'Frontend Developer'
    },
    {
      imageSrc: img3,
      text: 'KULDEEP JHALA',
      contri:'Frontend Developer'
    }
  ];
  const cards2 = [
    {
        imageSrc: img1,
        text: 'PRASHIK PAGARE',
        contri:'Frontend Developer'
      },
      {
        imageSrc: img1,
        text: 'ANMOL NAG',
        contri:'Frontend Developer'
      }
  ]

  return (<div className='back mt-56' >
    <div className='text-center w-full mt-4 mb-32 pt-32 heading font-thin'>
      Get in Touch
    <p className='mt-16 heading font-gordi contri hover-underline-animation'>Contributors</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {cards1.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} text={card.text} contri={card.contri} />
      ))}
    </div>
    <div className="flex flex-wrap justify-center">
      {cards2.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} text={card.text} contri={card.contri}/>
      ))}
    </div>
    </div>
  );
};

export default Members;
