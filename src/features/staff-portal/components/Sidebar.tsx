import React from 'react';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
import { StaffPortalView } from '../types';

interface SidebarProps {
  activeView: StaffPortalView;
  onChangeView: (view: StaffPortalView) => void;
  onSignOut: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView, onSignOut }) => {
  return (
    <aside className="hidden md:flex md:flex-col w-60 bg-white border-r border-gray-200">
      <div className="h-16 flex items-center px-4 border-b">
        <h2 className="text-lg font-semibold">Staff Portal</h2>
      </div>
      <nav className="flex-1 p-3 space-y-2">
        <button
          onClick={() => onChangeView('dashboard')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeView === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </button>
        <button
          onClick={() => onChangeView('applications')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeView === 'applications' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <FileText className="h-4 w-4" />
          Applications
        </button>
      </nav>
      <div className="p-3 border-t">
        <button
          onClick={onSignOut}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;


