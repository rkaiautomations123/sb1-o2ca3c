import React from 'react';
import RKAIAutomationsLogo from '../components/RKAIAutomationsLogo';

const LogoPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <RKAIAutomationsLogo className="w-64 h-64" />
    </div>
  );
};

export default LogoPage;