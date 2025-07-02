export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analyst' | 'content_creator';
  avatar?: string;
}

export interface SocialAccount {
  id: string;
  platform: 'twitter' | 'facebook' | 'instagram' | 'linkedin';
  username: string;
  connected: boolean;
  followers: number;
  following: number;
}

export interface AnalyticsMetric {
  date: string;
  followers: number;
  engagement: number;
  impressions: number;
  clicks: number;
  shares: number;
}

export interface ScheduledPost {
  id: string;
  content: string;
  platforms: string[];
  scheduledFor: string;
  status: 'scheduled' | 'published' | 'failed';
  mediaUrls?: string[];
}

export interface CompetitorData {
  id: string;
  name: string;
  platform: string;
  followers: number;
  engagement: number;
  postsPerWeek: number;
}

export interface Report {
  id: string;
  title: string;
  dateRange: {
    start: string;
    end: string;
  };
  platforms: string[];
  metrics: string[];
  createdAt: string;
}