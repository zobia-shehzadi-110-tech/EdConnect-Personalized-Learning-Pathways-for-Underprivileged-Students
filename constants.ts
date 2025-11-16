import { Language, Subject } from './types';

export const SUBJECTS_EN: Subject[] = [
    { id: 'basic_algebra', name: 'Basic Algebra' },
    { id: 'pakistan_history', name: 'History of Pakistan' },
    { id: 'biology_cells', name: 'Biology: Cells' },
    { id: 'english_grammar', name: 'English Grammar' },
];

export const SUBJECTS_UR: Subject[] = [
    { id: 'basic_algebra', name: 'بنیادی الجبرا' },
    { id: 'pakistan_history', name: 'تاریخ پاکستان' },
    { id: 'biology_cells', name: 'حیاتیات: خلیات' },
    { id: 'english_grammar', name: 'انگریزی گرامر' },
];

export const LOCALIZED_STRINGS: Record<Language, any> = {
  en: {
    appName: 'EdConnect',
    tagline: 'Find Your Gaps, Build Your Path',
    languageName: 'Urdu',
    // Subject Selector
    subjectTitle: "Which subject do you want to improve?",
    subjectSubtitle: "Choose a topic, and we'll create a short test to find your learning gaps.",
    startAssessment: "Start Assessment",
    // Assessment Quiz
    assessmentFor: "Assessment for",
    submitAnswers: "Analyze My Answers",
    // Pathway Display
    loadingMessage: 'Analyzing your results and building a custom pathway...',
    pathwaySubtitle: "Here's your step-by-step guide. Follow the path to fill your learning gaps!",
    gapAnalysisTitle: "Your Learning Gaps",
    pathwayTitle: "Your Personalized Pathway",
    startOverButton: 'Start a New Assessment',
    errorMessage: 'Oops! We couldn’t create a pathway. Please try again.',
    errorMessageAssessment: 'Oops! We couldn’t create an assessment. Please try a different subject.',
    tryAgainButton: 'Try Again',
    resourceType: {
      video: 'Watch',
      article: 'Read',
      quiz: 'Test Yourself',
      interactive: 'Explore',
    },
    startLearning: 'Start Learning',
    step: 'Step'
  },
  ur: {
    appName: 'ایڈ کنیکٹ',
    tagline: 'اپنی کمزوریاں جانیں، اپنی راہ بنائیں',
    languageName: 'English',
    // Subject Selector
    subjectTitle: "آپ کون سا مضمون بہتر بنانا چاہتے ہیں؟",
    subjectSubtitle: "ایک موضوع منتخب کریں، اور ہم آپ کی سیکھنے کی کمزوریوں کو تلاش کرنے کے لیے ایک مختصر ٹیسٹ بنائیں گے۔",
    startAssessment: "اسسمنٹ شروع کریں",
    // Assessment Quiz
    assessmentFor: "کے لیے اسسمنٹ",
    submitAnswers: "میرے جوابات کا تجزیہ کریں",
    // Pathway Display
    loadingMessage: 'آپ کے نتائج کا تجزیہ کیا جا رہا ہے اور ایک نیا راستہ بنایا جا رہا ہے...',
    pathwaySubtitle: 'یہ آپ کے لیے مرحلہ وار گائیڈ ہے۔ اپنی سیکھنے کی خامیوں کو دور کرنے کے لیے اس راستے پر عمل کریں!',
    gapAnalysisTitle: "آپ کی سیکھنے کی کمزوریاں",
    pathwayTitle: "آپ کا ذاتی راستہ",
    startOverButton: 'نیا اسسمنٹ شروع کریں',
    errorMessage: 'اوہ! ہم ایک راستہ نہیں بنا سکے۔ براہ کرم دوبارہ کوشش کریں۔',
    errorMessageAssessment: 'اوہ! ہم ایک اسسمنٹ نہیں بنا سکے۔ براہ کرم ایک مختلف مضمون آزمائیں۔',
    tryAgainButton: 'دوبارہ کوشش کریں',
    resourceType: {
      video: 'دیکھیں',
      article: 'پڑھیں',
      quiz: 'خود کو آزمائیں',
      interactive: 'دریافت کریں',
    },
    startLearning: 'سیکھنا شروع کریں',
    step: 'مرحلہ'
  }
};