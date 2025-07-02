import React, { useState } from 'react';
import { FileText, Download, Calendar, BarChart3, TrendingUp, Plus } from 'lucide-react';
import { reports } from '../data/mockData';
import { format } from 'date-fns';

const Reports: React.FC = () => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['followers', 'engagement']);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['twitter', 'instagram']);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const metrics = [
    { id: 'followers', label: 'Followers Growth' },
    { id: 'engagement', label: 'Engagement Rate' },
    { id: 'impressions', label: 'Impressions' },
    { id: 'clicks', label: 'Clicks' },
    { id: 'shares', label: 'Shares' },
    { id: 'mentions', label: 'Mentions' }
  ];

  const platforms = [
    { id: 'twitter', label: 'Twitter' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'linkedin', label: 'LinkedIn' }
  ];

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricId)
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const reportTemplates = [
    {
      name: 'Executive Summary',
      description: 'High-level overview for stakeholders',
      metrics: ['followers', 'engagement', 'impressions'],
      platforms: ['twitter', 'facebook', 'instagram'],
      frequency: 'Monthly'
    },
    {
      name: 'Campaign Performance',
      description: 'Detailed campaign analysis',
      metrics: ['clicks', 'shares', 'engagement'],
      platforms: ['twitter', 'instagram'],
      frequency: 'Per Campaign'
    },
    {
      name: 'Competitor Benchmark',
      description: 'Compare against competitors',
      metrics: ['followers', 'engagement', 'mentions'],
      platforms: ['twitter', 'facebook', 'instagram', 'linkedin'],
      frequency: 'Quarterly'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Generate comprehensive reports and export your data</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
          <Plus className="w-4 h-4" />
          Create Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Custom Report Builder</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Select Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {metrics.map((metric) => (
                    <button
                      key={metric.id}
                      onClick={() => toggleMetric(metric.id)}
                      className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                        selectedMetrics.includes(metric.id)
                          ? 'border-blue-500 bg-blue-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium text-gray-900">{metric.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Select Platforms</h4>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                        selectedPlatforms.includes(platform.id)
                          ? 'border-blue-500 bg-blue-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium text-gray-900">{platform.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Date Range</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full p-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">End Date</label>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full p-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  <BarChart3 className="w-4 h-4" />
                  Generate Report
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <FileText className="w-4 h-4" />
                  Preview
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Reports</h3>
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="p-4 border border-gray-200/50 rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-2">{report.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {format(new Date(report.dateRange.start), 'MMM dd')} - {format(new Date(report.dateRange.end), 'MMM dd, yyyy')}
                          </span>
                        </div>
                        <span>•</span>
                        <span>{report.platforms.length} platforms</span>
                        <span>•</span>
                        <span>{report.metrics.length} metrics</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Created {format(new Date(report.createdAt), 'MMM dd, yyyy')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg border border-gray-200/50 hover:border-blue-500 hover:bg-blue-50/50 transition-all">
                <FileText className="w-5 h-5 text-red-500" />
                <div>
                  <p className="font-medium text-gray-900">PDF Report</p>
                  <p className="text-sm text-gray-600">Executive summary with charts</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg border border-gray-200/50 hover:border-blue-500 hover:bg-blue-50/50 transition-all">
                <BarChart3 className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900">CSV Data</p>
                  <p className="text-sm text-gray-600">Raw data for analysis</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg border border-gray-200/50 hover:border-blue-500 hover:bg-blue-50/50 transition-all">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium text-gray-900">PowerPoint</p>
                  <p className="text-sm text-gray-600">Presentation ready slides</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Templates</h3>
            <div className="space-y-3">
              {reportTemplates.map((template, index) => (
                <div key={index} className="p-3 bg-gray-50/50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{template.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{template.metrics.length} metrics</span>
                    <span>{template.frequency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Reports</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">Weekly Summary</span>
                  <span className="text-xs text-blue-600">Active</span>
                </div>
                <p className="text-sm text-gray-600">Every Monday at 9:00 AM</p>
              </div>
              <div className="p-3 bg-gray-50/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">Monthly Report</span>
                  <span className="text-xs text-gray-500">Paused</span>
                </div>
                <p className="text-sm text-gray-600">1st of every month</p>
              </div>
            </div>
            <button className="w-full mt-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
              + Schedule New Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;