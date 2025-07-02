import React, { useState } from 'react';
import { Calendar, Clock, Send, Image, Video, Plus, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { scheduledPosts } from '../data/mockData';
import { format } from 'date-fns';

const Schedule: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['twitter']);
  const [postContent, setPostContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'text-blue-500' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700' }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule Posts</h1>
          <p className="text-gray-600 mt-1">Create and schedule content across all your social platforms</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Create New Post</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Platforms</label>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                        selectedPlatforms.includes(platform.id)
                          ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <platform.icon className={`w-5 h-5 ${platform.color}`} />
                      <span className="font-medium text-gray-900">{platform.name}</span>
                      {selectedPlatforms.includes(platform.id) && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Post Content</label>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's happening? Share your thoughts..."
                  className="w-full h-32 p-4 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <Image className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <Video className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">{postContent.length}/280</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="time"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Calendar className="w-4 h-4" />
                  Schedule Post
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <Send className="w-4 h-4" />
                  Publish Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Scheduled Posts</span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Published Today</span>
                <span className="font-semibold text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Draft Posts</span>
                <span className="font-semibold text-gray-900">7</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Times to Post</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Twitter</span>
                </div>
                <span className="text-sm text-gray-600">2:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-medium">Instagram</span>
                </div>
                <span className="text-sm text-gray-600">11:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </div>
                <span className="text-sm text-gray-600">1:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Scheduled Posts</h3>
          <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            Add Post
          </button>
        </div>

        <div className="space-y-4">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="p-4 border border-gray-200/50 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-gray-900 mb-2">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(post.scheduledFor), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{format(new Date(post.scheduledFor), 'h:mm a')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {post.platforms.map((platform) => {
                        const platformConfig = platforms.find(p => p.id === platform);
                        return platformConfig ? (
                          <platformConfig.icon key={platform} className={`w-4 h-4 ${platformConfig.color}`} />
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                  {post.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;