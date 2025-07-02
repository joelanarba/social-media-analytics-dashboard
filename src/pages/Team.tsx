import React, { useState } from 'react';
import { Users, UserPlus, Shield, Edit, Trash2, Mail, Phone } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const Team: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('content_creator');

  const roleColors = {
    admin: 'bg-red-100 text-red-800',
    analyst: 'bg-blue-100 text-blue-800',
    content_creator: 'bg-green-100 text-green-800'
  };

  const rolePermissions = {
    admin: ['Full access', 'User management', 'Billing', 'Export data'],
    analyst: ['View analytics', 'Generate reports', 'Export data'],
    content_creator: ['Create posts', 'Schedule content', 'View basic analytics']
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-600 mt-1">Manage your team members and their access permissions</p>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
        >
          <UserPlus className="w-4 h-4" />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50/50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">3</h3>
          <p className="text-gray-600 text-sm">Total Members</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50/50 rounded-xl">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">1</h3>
          <p className="text-gray-600 text-sm">Admin Users</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50/50 rounded-xl">
              <UserPlus className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">5</h3>
          <p className="text-gray-600 text-sm">Available Seats</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Members</h3>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 border border-gray-200/50 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleColors[member.role]}`}>
                        {member.role.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(rolePermissions).map(([role, permissions]) => (
            <div key={role} className="p-4 bg-gray-50/50 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <h4 className="font-semibold text-gray-900 capitalize">{role.replace('_', ' ')}</h4>
              </div>
              <ul className="space-y-2">
                {permissions.map((permission, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Invite Team Member</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@company.com"
                  className="w-full p-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full p-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="content_creator">Content Creator</option>
                  <option value="analyst">Analyst</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="p-3 bg-blue-50/50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Role Permissions:</h4>
                <ul className="space-y-1">
                  {rolePermissions[inviteRole as keyof typeof rolePermissions].map((permission, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => {
                  // Handle invite logic here
                  setShowInviteModal(false);
                  setInviteEmail('');
                }}
                className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Send Invite
              </button>
              <button
                onClick={() => setShowInviteModal(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;