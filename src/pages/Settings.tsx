import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Palette, Globe, Database, Key } from 'lucide-react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    mentions: true,
    reports: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    dataSharing: false,
    analytics: true
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences and application settings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Push Notifications</h4>
                  <p className="text-sm text-gray-600">Receive browser notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.push}
                    onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Mention Alerts</h4>
                  <p className="text-sm text-gray-600">Get notified when you're mentioned</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.mentions}
                    onChange={(e) => setNotifications(prev => ({ ...prev, mentions: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Weekly Reports</h4>
                  <p className="text-sm text-gray-600">Receive weekly analytics summary</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.reports}
                    onChange={(e) => setNotifications(prev => ({ ...prev, reports: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Privacy & Security</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Public Profile</h4>
                  <p className="text-sm text-gray-600">Make your profile visible to others</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy.profileVisible}
                    onChange={(e) => setPrivacy(prev => ({ ...prev, profileVisible: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Data Sharing</h4>
                  <p className="text-sm text-gray-600">Share anonymized data for improvements</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy.dataSharing}
                    onChange={(e) => setPrivacy(prev => ({ ...prev, dataSharing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Usage Analytics</h4>
                  <p className="text-sm text-gray-600">Help us improve the platform</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy.analytics}
                    onChange={(e) => setPrivacy(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">API Keys</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Production API Key</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 font-mono">sk_prod_••••••••••••••••••••••••••••••••••••</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="text-xs text-blue-600 hover:text-blue-800">Regenerate</button>
                  <span className="text-gray-300">•</span>
                  <button className="text-xs text-red-600 hover:text-red-800">Revoke</button>
                </div>
              </div>

              <div className="p-4 bg-gray-50/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Test API Key</h4>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Testing</span>
                </div>
                <p className="text-sm text-gray-600 font-mono">sk_test_••••••••••••••••••••••••••••••••••••</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="text-xs text-blue-600 hover:text-blue-800">Regenerate</button>
                  <span className="text-gray-300">•</span>
                  <button className="text-xs text-red-600 hover:text-red-800">Revoke</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Appearance</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <select className="w-full p-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Auto</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select className="w-full p-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Data & Storage</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Storage Used</span>
                <span className="font-semibold text-gray-900">2.4 GB / 10 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
              <button className="w-full py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                Manage Storage
              </button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Integrations</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <span className="font-medium text-gray-900">Twitter</span>
                <span className="text-green-600 text-sm">Connected</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <span className="font-medium text-gray-900">Facebook</span>
                <span className="text-green-600 text-sm">Connected</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-lg">
                <span className="font-medium text-gray-900">LinkedIn</span>
                <span className="text-gray-500 text-sm">Not Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h3>
        <div className="space-y-4">
          <div className="p-4 border border-red-200 rounded-lg bg-red-50/50">
            <h4 className="font-medium text-red-900 mb-2">Export Account Data</h4>
            <p className="text-sm text-red-700 mb-3">Download all your account data and content.</p>
            <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors">
              Export Data
            </button>
          </div>
          
          <div className="p-4 border border-red-200 rounded-lg bg-red-50/50">
            <h4 className="font-medium text-red-900 mb-2">Delete Account</h4>
            <p className="text-sm text-red-700 mb-3">Permanently delete your account and all associated data.</p>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;