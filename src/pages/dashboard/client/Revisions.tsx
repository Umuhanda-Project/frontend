import { useMemo } from 'react';
import Revision from './Revision';
import { revisionQuestions } from '../../../utils/RevisionQuestions';
import { useLanguageDetector } from '../../../hooks/useLanguageDetector';
import { useLanguage } from '../../../hooks/useLanguage';

const Revisions = () => {
  const language = useLanguageDetector();
  const contextLanguage = useLanguage()

  console.log(language);

  console.log("contextLanguagee",contextLanguage.state.currentName);

  const questions = useMemo(() => {
    return revisionQuestions.filter((lesson) => lesson.status === contextLanguage.state.currentName);
  }, [language]);

  console.log("revisions",revisionQuestions.filter((lesson) => lesson.status === contextLanguage.state.currentName))
  
  console.log("questions",questions);

  return <Revision questions={questions} />;
};

export default Revisions;
