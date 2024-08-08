import React from 'react';
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative border-b border-gray-200 min-h-[800px] section bg-[#e6e6e6]">
      <div className="text-center">
        <span className="bg-primary text-white rounded-full text-sm font-medium px-3 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-secondary">
          Empower your
          <span className="bg-gradient-to-r from-[#3c7fa3] to-[#0a2c3d] text-transparent bg-clip-text">
            {" "}medical studies
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-[#e6e6e6] rounded-lg p-6 h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 hover:bg-white">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h5 className="ml-4 text-xl font-semibold text-secondary">{feature.text}</h5>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;