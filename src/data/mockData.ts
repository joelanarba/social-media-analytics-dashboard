import { AnalyticsMetric, SocialAccount, ScheduledPost, CompetitorData, Report, User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah@company.com',
  role: 'admin',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
};

export const socialAccounts: SocialAccount[] = [
  {
    id: '1',
    platform: 'twitter',
    username: '@company',
    connected: true,
    followers: 24500,
    following: 850
  },
  {
    id: '2',
    platform: 'facebook',
    username: 'Company Page',
    connected: true,
    followers: 18200,
    following: 0
  },
  {
    id: '3',
    platform: 'instagram',
    username: '@company_official',
    connected: true,
    followers: 31800,
    following: 1200
  },
  {
    id: '4',
    platform: 'linkedin',
    username: 'Company LinkedIn',
    connected: false,
    followers: 5600,
    following: 200
  }
];

export const analyticsData: AnalyticsMetric[] = [
  { date: '2024-01-01', followers: 72000, engagement: 3.2, impressions: 245000, clicks: 8500, shares: 650 },
  { date: '2024-01-02', followers: 72150, engagement: 3.8, impressions: 280000, clicks: 9200, shares: 720 },
  { date: '2024-01-03', followers: 72080, engagement: 2.9, impressions: 220000, clicks: 7800, shares: 580 },
  { date: '2024-01-04', followers: 72300, engagement: 4.1, impressions: 310000, clicks: 11200, shares: 890 },
  { date: '2024-01-05', followers: 72450, engagement: 3.6, impressions: 265000, clicks: 9800, shares: 750 },
  { date: '2024-01-06', followers: 72600, engagement: 4.5, impressions: 340000, clicks: 12500, shares: 980 },
  { date: '2024-01-07', followers: 72800, engagement: 3.9, impressions: 295000, clicks: 10200, shares: 820 }
];

export const scheduledPosts: ScheduledPost[] = [
  {
    id: '1',
    content: 'Excited to announce our new product launch! Stay tuned for more updates. #ProductLaunch #Innovation',
    platforms: ['twitter', 'facebook', 'linkedin'],
    scheduledFor: '2024-01-08T14:00:00Z',
    status: 'scheduled'
  },
  {
    id: '2',
    content: 'Behind the scenes of our amazing team working on groundbreaking features!',
    platforms: ['instagram', 'facebook'],
    scheduledFor: '2024-01-08T16:30:00Z',
    status: 'scheduled',
    mediaUrls: ['https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg']
  },
  {
    id: '3',
    content: 'Just published: The Ultimate Guide to Social Media Marketing in 2024',
    platforms: ['twitter', 'linkedin'],
    scheduledFor: '2024-01-07T10:00:00Z',
    status: 'published'
  }
];

export const competitorData: CompetitorData[] = [
  {
    id: '1',
    name: 'Competitor A',
    platform: 'twitter',
    followers: 45000,
    engagement: 2.8,
    postsPerWeek: 12
  },
  {
    id: '2',
    name: 'Competitor B',
    platform: 'twitter',
    followers: 38000,
    engagement: 4.2,
    postsPerWeek: 8
  },
  {
    id: '3',
    name: 'Competitor C',
    platform: 'instagram',
    followers: 52000,
    engagement: 5.1,
    postsPerWeek: 15
  }
];

export const reports: Report[] = [
  {
    id: '1',
    title: 'Q4 2023 Performance Report',
    dateRange: {
      start: '2023-10-01',
      end: '2023-12-31'
    },
    platforms: ['twitter', 'facebook', 'instagram'],
    metrics: ['followers', 'engagement', 'impressions'],
    createdAt: '2024-01-02T09:00:00Z'
  },
  {
    id: '2',
    title: 'Holiday Campaign Analysis',
    dateRange: {
      start: '2023-12-01',
      end: '2023-12-25'
    },
    platforms: ['instagram', 'facebook'],
    metrics: ['engagement', 'clicks', 'shares'],
    createdAt: '2024-01-03T14:30:00Z'
  }
];

export const teamMembers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike@company.com',
    role: 'analyst',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma@company.com',
    role: 'content_creator',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  }
];