import React from 'react';
import { TrendingUp, Users, BarChart3, Eye } from 'lucide-react';
import BarChart from '../components/Charts/BarChart';
import { competitorData } from '../data/mockData';

const Competitors: React.FC = () => {
  const competitorChartData = {
    labels: competitorData.map(comp => comp.name),
    datasets: [
      {
        label: 'Followers',
        data: competitorData.map(comp => comp.followers),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 8
      },
      {
        label: 'Our Performance',
        data: [24500, 24500, 31800], // Your performance data
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderRadius: 8
      }
    ]
  };

  const engagementChartData = {
    labels: competitorData.map(comp => comp.name),
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: competitorData.map(comp => comp.engagement),
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
        borderRadius: 8
      },
      {
        label: 'Our Engagement',
        data: [3.2, 4.2, 4.5], // Your engagement data
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
        borderRadius: 8
      }
    ]
  };

  const competitorProfiles = [
    {
      name: 'Competitor A',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      followers: 45000,
      engagement: 2.8,
      postsPerWeek: 12,
      topContent: 'Product showcases, tutorials',
      strength: 'Consistent posting schedule',
      weakness: 'Low engagement rate'
    },
    {
      name: 'Competitor B',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      followers: 38000,
      engagement: 4.2,
      postsPerWeek: 8,
      topContent: 'Behind-the-scenes, user stories',
      strength: 'High engagement quality',
      weakness: 'Irregular posting'
    },
    {
      name: 'Competitor C',
      logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      followers: 52000,
      engagement: 5.1,
      postsPerWeek: 15,
      topContent: 'Viral trends, memes, lifestyle',
      strength: 'Trendy content creation',
      weakness: 'Off-brand content'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Competitor Analysis</h1>
          <p className="text-gray-600 mt-1">Monitor and compare your performance against key competitors</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
            <option>All Platforms</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>Facebook</option>
          </select>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
            Add Competitor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50/50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+2nd</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">24.5K</h3>
          <p className="text-gray-600 text-sm">Your Followers</p>
          <p className="text-xs text-gray-500 mt-1">vs avg 45K</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50/50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+1st</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">4.2%</h3>
          <p className="text-gray-600 text-sm">Your Engagement</p>
          <p className="text-xs text-gray-500 mt-1">vs avg 4.0%</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50/50 rounded-xl">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-orange-600 text-sm font-semibold">3rd</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">8</h3>
          <p className="text-gray-600 text-sm">Posts/Week</p>
          <p className="text-xs text-gray-500 mt-1">vs avg 12</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50/50 rounded-xl">
              <Eye className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold">+1st</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">89%</h3>
          <p className="text-gray-600 text-sm">Market Share</p>
          <p className="text-xs text-gray-500 mt-1">in your niche</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Follower Comparison</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Competitors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">You</span>
              </div>
            </div>
          </div>
          <BarChart data={competitorChartData} height={300} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Comparison</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Competitors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">You</span>
              </div>
            </div>
          </div>
          <BarChart data={engagementChartData} height={300} />
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Competitor Profiles</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {competitorProfiles.map((competitor, index) => (
            <div key={index} className="p-6 bg-gray-50/50 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={competitor.logo}
                  alt={competitor.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{competitor.name}</h4>
                  <p className="text-sm text-gray-600">{competitor.followers.toLocaleString()} followers</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Engagement Rate</p>
                    <p className="font-semibold text-gray-900">{competitor.engagement}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Posts/Week</p>
                    <p className="font-semibold text-gray-900">{competitor.postsPerWeek}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 text-sm mb-1">Top Content</p>
                  <p className="text-sm text-gray-900">{competitor.topContent}</p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-800 font-medium">Strength</p>
                    <p className="text-xs text-green-700">{competitor.strength}</p>
                  </div>
                  <div className="p-2 bg-red-50 rounded-lg">
                    <p className="text-xs text-red-800 font-medium">Weakness</p>
                    <p className="text-xs text-red-700">{competitor.weakness}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Strategic Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50/50 rounded-xl">
            <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Content Opportunity</h4>
            <p className="text-sm text-gray-600">
              Competitors post 40% more tutorial content. Consider increasing educational posts.
            </p>
          </div>
          <div className="p-4 bg-green-50/50 rounded-xl">
            <Users className="w-8 h-8 text-green-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Engagement Edge</h4>
            <p className="text-sm text-gray-600">
              Your engagement rate is 12% higher. Focus on quality over quantity approach.
            </p>
          </div>
          <div className="p-4 bg-purple-50/50 rounded-xl">
            <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Posting Gap</h4>
            <p className="text-sm text-gray-600">
              Increase posting frequency by 30% to match competitor activity levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitors;