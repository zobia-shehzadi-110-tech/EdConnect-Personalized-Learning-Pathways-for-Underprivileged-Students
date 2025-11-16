import React, { useState, useCallback } from 'react';
import { Language, Subject, LearningPathway, AssessmentQuestion, AssessmentAnswers, AnalysisResult } from './types';
import { LOCALIZED_STRINGS } from './constants';
import { getDiagnosticAssessment, getGapAnalysisAndPathway } from './services/geminiService';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import SubjectSelector from './components/SubjectSelector';
import AssessmentQuiz from './components/AssessmentQuiz';
import PathwayDisplay from './components/PathwayDisplay';


export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentStage, setCurrentStage] = useState<'selecting' | 'assessing' | 'loading' | 'results'>('selecting');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [assessment, setAssessment] = useState<AssessmentQuestion[] | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const currentStrings = LOCALIZED_STRINGS[language];
  const appFont = language === 'ur' ? 'font-urdu' : 'font-sans';

  const handleSubjectSelect = useCallback(async (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentStage('loading');
    setError(null);
    try {
      const questions = await getDiagnosticAssessment(subject.id, language);
      setAssessment(questions);
      setCurrentStage('assessing');
    } catch (err) {
      console.error(err);
      setError(currentStrings.errorMessageAssessment);
      setCurrentStage('selecting');
    }
  }, [language, currentStrings.errorMessageAssessment]);

  const handleAssessmentSubmit = useCallback(async (answers: AssessmentAnswers) => {
      if (!selectedSubject || !assessment) return;
      setCurrentStage('loading');
      setError(null);
      try {
          const result = await getGapAnalysisAndPathway(selectedSubject.id, assessment, answers, language);
          setAnalysisResult(result);
          setCurrentStage('results');
      } catch (err) {
          console.error(err);
          setError(currentStrings.errorMessage);
          setCurrentStage('selecting');
      }
  }, [language, selectedSubject, assessment, currentStrings.errorMessage]);


  const handleReset = () => {
    setCurrentStage('selecting');
    setSelectedSubject(null);
    setAssessment(null);
    setAnalysisResult(null);
    setError(null);
  };
  
  const renderContent = () => {
    switch (currentStage) {
      case 'selecting':
        return <SubjectSelector onSubjectSelect={handleSubjectSelect} language={language} />;
      case 'assessing':
        if (assessment && selectedSubject) {
            return <AssessmentQuiz assessment={assessment} subject={selectedSubject} onSubmit={handleAssessmentSubmit} language={language} />;
        }
        return null;
      case 'loading':
        return (
          <div className="flex flex-col items-center justify-center h-64">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-slate-600">{currentStrings.loadingMessage}</p>
          </div>
        );
      case 'results':
        if (analysisResult) {
            return <PathwayDisplay result={analysisResult} onReset={handleReset} language={language} />;
        }
        return null;
      default:
        return <SubjectSelector onSubjectSelect={handleSubjectSelect} language={language} />;
    }
  }

  return (
    <div dir={language === 'ur' ? 'rtl' : 'ltr'} className={`${appFont} min-h-screen bg-slate-100 text-slate-800 transition-all duration-300`}>
      <Header language={language} setLanguage={setLanguage} />
      <main className="container mx-auto p-4 md:p-8">
        {error && (
            <div className="text-center my-8 p-6 bg-red-100 border border-red-300 rounded-lg max-w-lg mx-auto">
            <p className="text-red-700 font-semibold">{error}</p>
            <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
                {currentStrings.tryAgainButton}
            </button>
        </div>
        )}
        {!error && renderContent()}
      </main>
    </div>
  );
}