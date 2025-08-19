import React from 'react';
import { Application } from '../types';
import { CheckCircle, Clock, Eye } from 'lucide-react';

interface DashboardOverviewProps {
  applications: Application[];
}

const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => (
  <div className={`rounded-xl border bg-white ${color} p-5`}> 
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="rounded-lg bg-gray-50 p-3">{icon}</div>
    </div>
  </div>
);

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ applications }) => {
  const total = applications.length;
  const by = (s: string) => applications.filter(a => a.status?.toLowerCase() === s).length;
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total" value={total} icon={<Eye className="h-6 w-6 text-blue-600" />} color="" />
        <StatCard title="Pending" value={by('pending')} icon={<Clock className="h-6 w-6 text-yellow-600" />} color="" />
        <StatCard title="Under Review" value={by('under review')} icon={<Eye className="h-6 w-6 text-blue-600" />} color="" />
        <StatCard title="Approved" value={by('approved')} icon={<CheckCircle className="h-6 w-6 text-green-600" />} color="" />
      </div>
      <div className="rounded-xl border bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900">Welcome</h3>
        <p className="mt-2 text-gray-600">Use the sidebar to navigate. Recent applications and detailed actions are in the Applications tab.</p>
      </div>
    </div>
  );
};

export default DashboardOverview;


