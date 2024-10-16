import React from 'react';

interface RKAIAutomationsLogoProps {
  className?: string;
}

const RKAIAutomationsLogo: React.FC<RKAIAutomationsLogoProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="#1E90FF"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112.7 359.4c-13.4 13.4-30.1 21.7-49.3 21.7-19.3 0-36-8.3-49.3-21.7l-14.7-14.7-14.7 14.7c-13.4 13.4-30.1 21.7-49.3 21.7-19.3 0-36-8.3-49.3-21.7s-21.7-30.1-21.7-49.3c0-19.3 8.3-36 21.7-49.3l14.7-14.7-14.7-14.7c-13.4-13.4-21.7-30.1-21.7-49.3 0-19.3 8.3-36 21.7-49.3 13.4-13.4 30.1-21.7 49.3-21.7 19.3 0 36 8.3 49.3 21.7l14.7 14.7 14.7-14.7c13.4-13.4 30.1-21.7 49.3-21.7 19.3 0 36 8.3 49.3 21.7s21.7 30.1 21.7 49.3c0 19.3-8.3 36-21.7 49.3l-14.7 14.7 14.7 14.7c13.4 13.4 21.7 30.1 21.7 49.3 0 19.3-8.3 36-21.7 49.3z"
    />
    <text
      x="50%"
      y="80%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="72"
      fontWeight="bold"
      fill="#1E90FF"
    >
      RKAI
    </text>
    <text
      x="50%"
      y="95%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="36"
      fill="#1E90FF"
    >
      Automations
    </text>
  </svg>
);

export default RKAIAutomationsLogo;