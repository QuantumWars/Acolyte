import React, { useState, useEffect } from 'react';
import image1 from "../assets/hero1.png";
import image2 from "../assets/hero2.png";
// import image3 from "../assets/smart-note-taking.jpg";

const words = ["Studies", "Notes", "Books"];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullWord = words[current];

      setCurrentWord(prev => {
        if (isDeleting) {
          setTypingSpeed(75); // Faster when deleting
          return fullWord.substring(0, prev.length - 1);
        } else {
          setTypingSpeed(150); // Normal speed when typing
          return fullWord.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  const handleWaitlistClick = () => {
    window.open('https://forms.gle/Cd8QAEfN3qWuYGpN8', '_blank');
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 section">
      <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl text-center tracking-wide text-secondary">
        Revolutionize Your
        <span className="bg-gradient-to-r from-[#3c7fa3] to-[#0a2c3d] text-transparent bg-clip-text ml-2">
          {currentWord}
        </span>
        <span className="animate-blink">|</span>
      </h1>
      <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl text-center tracking-wide text-secondary mt-2">
        <span className="bg-[#0a2c3d] text-transparent bg-clip-text">
          With AI
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-gray-600 max-w-4xl">
        Acolyte is your intelligent study companion, combining AI-powered learning tools with smart note-taking to help medical students master complex concepts faster and more efficiently. Join our waitlist to be among the first to experience the future of medical education.
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={handleWaitlistClick}
          className="btn-primary"
        >
          Join our waitlist
        </button>
      </div>
      <div className="flex mt-10 justify-center flex-wrap">
        <img
          src={image1}
          alt="Medical student using Acolyte on a tablet"
          className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-primary shadow-lg shadow-primary/20 mx-10 my-4"
        />
        <img
          src={image2}
          alt="AI-assisted learning interface of Acolyte"
          className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-primary shadow-lg shadow-primary/20 mx-10 my-4"
        />
        
      </div>
    </div>
  );
};

export default HeroSection;