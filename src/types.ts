export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  type: 'Game' | 'Software' | 'Hardware' | 'IoT' | 'Web' | 'System';
  status: 'Completed' | 'In Progress' | 'Beta';
  previewDetails?: string;
}

export interface Skill {
  name: string;
  level: number; // For progress indicators
  category: 'programming' | 'creative' | 'technical';
  description?: string;
}

export interface TimelineEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  achievements?: string[];
}

export interface LeadershipExperience {
  id: string;
  role: string;
  organization: string;
  period?: string;
  details: string[];
  category: 'leadership' | 'hackathon' | 'workshop';
}

export interface Certification {
  id: string;
  title: string;
  authority?: string;
  issueDate?: string;
  badgeType: 'ai' | 'security' | 'office' | 'default';
}

export interface ExtraCurricular {
  id: string;
  title: string;
  description: string;
  focusKeywords: string[];
}
