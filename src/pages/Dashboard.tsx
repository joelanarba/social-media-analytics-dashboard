import React from 'react';
import { Users, TrendingUp, Eye, MousePointer, Share2, Heart } from 'lucide-react';
import MetricCard from '../components/Dashboard/MetricCard';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import { analyticsData, socialAccounts } from '../data/mockData';

const Dashboard: React.FC = () => {
  const totalFollowers = socialAccounts.reduce((sum, account) => sum + account.followers, 0);
  const avgEngagement = 3.7;
  const totalImpressions = 1250000;
  const totalClicks = 42500;

  const chartData = {
    labels: analyticsData.map(item => {
      const date = new Date(item.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'Followers',
        data: analyticsData.map(item => item.followers),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgb(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Engagement Rate',
        data: analyticsData.map(item => item.engagement),
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgb(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const barChartData = {
    labels: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'],
    datasets: [
      {
        label: 'Followers',
        data: socialAccounts.map(account => account.followers),
        backgroundColor: [
          'rgba(29, 161, 242, 0.8)',
          'rgba(66, 103, 178, 0.8)',
          'rgba(225, 48, 108, 0.8)',
          'rgba(0, 119, 181, 0.8)'
        ],
        borderRadius: 8
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Track your social media performance across all platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Followers"
          value={totalFollowers}
          change={8.2}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Avg. Engagement Rate"
          value={`${avgEngagement}%`}
          change={-2.1}
          icon={Heart}
          color="purple"
        />
        <MetricCard
          title="Total Impressions"
          value={totalImpressions}
          change={15.3}
          icon={Eye}
          color="green"
        />
        <MetricCard
          title="Total Clicks"
          value={totalClicks}
          change={23.7}
          icon={MousePointer}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Growth Trends</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Followers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Engagement</span>
              </div>
            </div>
          </div>
          <LineChart data={chartData} options={chartOptions} height={300} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Platform Comparison</h3>
          </div>
          <BarChart data={barChartData} height={300} />
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { platform: 'Twitter', action: 'New post published', time: '2 hours ago', engagement: '+15 engagements' },
            { platform: 'Instagram', action: 'Story posted', time: '4 hours ago', engagement: '+23 views' },
            { platform: 'Facebook', action: 'Post scheduled', time: '6 hours ago', engagement: 'Scheduled for 2 PM' },
            { platform: 'LinkedIn', action: 'Article shared', time: '1 day ago', engagement: '+45 likes' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.platform} - {activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
              <div className="text-sm font-medium text-green-600">
                {activity.engagement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;