import React from 'react';
import { Bell, Search, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-30">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns, posts, analytics..."
              className="pl-10 pr-4 py-2 w-80 bg-gray-100/80 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Plus className="w-4 h-4" />
            Create Post
          </button>

          <div className="relative">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;