import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  TrendingUp, 
  Users, 
  FileText, 
  Settings,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

const navigationItems = [
  { path: '/', icon: BarChart3, label: 'Dashboard', exact: true },
  { path: '/schedule', icon: Calendar, label: 'Schedule Posts' },
  { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
  { path: '/competitors', icon: Users, label: 'Competitors' },
  { path: '/reports', icon: FileText, label: 'Reports' },
  { path: '/team', icon: Users, label: 'Team Management' },
  { path: '/settings', icon: Settings, label: 'Settings' }
];

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-md border-r border-gray-200/50 z-40">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">SocialPulse</h1>
            <p className="text-sm text-gray-500">Analytics Dashboard</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200/50">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">Connected Accounts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50/50">
              <Twitter className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-700">@company</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50/50">
              <Facebook className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">Company Page</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-pink-50/50">
              <Instagram className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-gray-700">@company_official</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50/50">
              <Linkedin className="w-4 h-4 text-blue-700" />
              <span className="text-sm text-gray-700">Company LinkedIn</span>
              <div className="w-2 h-2 bg-gray-400 rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50">
        <div className="flex items-center gap-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
            <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;