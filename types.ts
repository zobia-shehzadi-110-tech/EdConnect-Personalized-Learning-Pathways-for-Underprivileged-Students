export type Language = 'en' | 'ur';

export interface Subject {
  id: string;
  name: string;
}

export interface AssessmentQuestion {
    question: string;
    options: string[];
    correct_option: string;
}

export type AssessmentAnswers = Record<number, string>; // Maps question index to selected option

export interface LearningStep {
  step: number;
  title: string;
  description: string;
  type: 'video' | 'article' | 'quiz' | 'interactive';
  link: string;
}

export interface LearningPathway {
  pathwayTitle: string;
  steps: LearningStep[];
}

export interface AnalysisResult {
  gapAnalysis: string;
  pathway: LearningPathway;
}
