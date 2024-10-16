import React from 'react'

const CustomIllustration: React.FC = () => {
  return (
    <div className="relative h-64 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0099ff"
          fillOpacity="0.5"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">RKAI Automations</div>
      </div>
    </div>
  )
}

export default CustomIllustration