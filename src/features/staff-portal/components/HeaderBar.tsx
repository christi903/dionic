import React from 'react';

interface HeaderBarProps {
  title: string;
  userName?: string | null;
  userEmail?: string | null;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, userName, userEmail }) => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h1>
      {(userName || userEmail) && (
        <div className="text-right">
          {userName && <div className="text-sm font-medium text-gray-900">{userName}</div>}
          {userEmail && <div className="text-xs text-gray-600">{userEmail}</div>}
        </div>
      )}
    </div>
  );
};

export default HeaderBar;


