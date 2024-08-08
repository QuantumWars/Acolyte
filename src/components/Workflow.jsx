import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import Video from '../assets/workflow-video.mp4';

const Workflow = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef(checklistItems.map(() => React.createRef()));

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => ({ ...prev, [index]: true }));
              }, index * 200);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="section bg-surface">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-12 tracking-wide text-secondary">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-[#3c7fa3] to-[#0a2c3d] text-transparent bg-clip-text">
          Learning.
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="w-full lg:w-2/5 h-[400px] rounded-lg overflow-hidden shadow-lg">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full lg:w-1/2"> {/* Removed height and overflow properties */}
          {checklistItems.map((item, index) => (
            <div
              key={index}
              ref={itemRefs.current[index]}
              className={`flex mb-8 transition-all duration-1000 ease-out ${
                visibleItems[index]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="text-primary mx-6 bg-primary/10 h-12 w-12 flex-shrink-0 flex justify-center items-center rounded-full">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-2xl font-semibold text-secondary">
                  {item.title}
                </h5>
                <p className="text-md text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;