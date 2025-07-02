import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const bgColorClasses = {
    blue: 'bg-blue-50/50',
    green: 'bg-green-50/50',
    purple: 'bg-purple-50/50',
    orange: 'bg-orange-50/50'
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value.toLocaleString()}</p>
          <div className="flex items-center gap-1">
            <span
              className={`text-sm font-semibold ${
                change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {change >= 0 ? '+' : ''}{change}%
            </span>
            <span className="text-gray-500 text-sm">vs last period</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${bgColorClasses[color]}`}>
          <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;