import React, { useState } from 'react';
import { TrendingUp, Users, Eye, MousePointer, Share2, Calendar } from 'lucide-react';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import { analyticsData, socialAccounts } from '../data/mockData';

const Analytics: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const engagementData = {
    labels: analyticsData.map(item => {
      const date = new Date(item.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'Impressions',
        data: analyticsData.map(item => item.impressions),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Clicks',
        data: analyticsData.map(item => item.clicks),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Shares',
        data: analyticsData.map(item => item.shares),
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const platformMetrics = [
    { platform: 'Twitter', followers: 24500, engagement: 3.2, growth: 8.2 },
    { platform: 'Instagram', followers: 31800, engagement: 4.5, growth: 12.3 },
    { platform: 'Facebook', followers: 18200, engagement: 2.1, growth: -1.5 },
    { platform: 'LinkedIn', followers: 5600, engagement: 5.8, growth: 15.7 }
  ];

  const topPosts = [
    {
      id: '1',
      content: 'Just launched our new product! Excited to see what you think 🚀',
      platform: 'Twitter',
      engagement: 1250,
      impressions: 18500,
      likes: 890,
      shares: 145
    },
    {
      id: '2',
      content: 'Behind the scenes of our latest photoshoot ✨',
      platform: 'Instagram',
      engagement: 2100,
      impressions: 25000,
      likes: 1890,
      shares: 210
    },
    {
      id: '3',
      content: 'Industry insights: The future of social media marketing',
      platform: 'LinkedIn',
      engagement: 890,
      impressions: 12000,
      likes: 650,
      shares: 240
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Deep dive into your social media performance</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="all">All Platforms</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">LinkedIn</option>
          </select>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50/50 rounded-xl">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+15.3%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">1.25M</h3>
          <p className="text-gray-600 text-sm">Total Impressions</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50/50 rounded-xl">
              <MousePointer className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+23.7%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">42.5K</h3>
          <p className="text-gray-600 text-sm">Total Clicks</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50/50 rounded-xl">
              <Share2 className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+18.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">3.2K</h3>
          <p className="text-gray-600 text-sm">Total Shares</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50/50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+12.8%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">4.2%</h3>
          <p className="text-gray-600 text-sm">Avg. Engagement Rate</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Engagement Overview</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Impressions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Clicks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Shares</span>
            </div>
          </div>
        </div>
        <LineChart data={engagementData} height={350} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Platform Performance</h3>
          <div className="space-y-4">
            {platformMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-gray-50/50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{metric.platform}</h4>
                  <span className={`text-sm font-semibold ${
                    metric.growth >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.growth >= 0 ? '+' : ''}{metric.growth}%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Followers</p>
                    <p className="font-semibold text-gray-900">{metric.followers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Engagement</p>
                    <p className="font-semibold text-gray-900">{metric.engagement}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Posts</h3>
          <div className="space-y-4">
            {topPosts.map((post) => (
              <div key={post.id} className="p-4 bg-gray-50/50 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-gray-900 flex-1 line-clamp-2">{post.content}</p>
                  <span className="text-xs text-gray-500 ml-2">{post.platform}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-gray-600">Engagement</p>
                    <p className="font-semibold text-gray-900">{post.engagement.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Impressions</p>
                    <p className="font-semibold text-gray-900">{post.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Likes</p>
                    <p className="font-semibold text-gray-900">{post.likes.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;