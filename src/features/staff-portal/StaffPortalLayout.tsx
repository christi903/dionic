import React from 'react';

const StaffPortalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {children}
      </div>
    </div>
  );
};

export default StaffPortalLayout;


