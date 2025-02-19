import { useMemo } from 'react';
import Revision from './Revision';
import { revisionQuestions } from '../../../utils/RevisionQuestions';
import { useLanguageDetector } from '../../../hooks/useLanguageDetector';
import { useLanguage } from '../../../hooks/useLanguage';

const Revisions = () => {
  const language = useLanguageDetector();
  console.log(language);
  const contextLanguage = useLanguage()
  console.log(contextLanguage.state.currentCode);

  const questions = useMemo(() => {
    return revisionQuestions.filter((lesson) => lesson.status === contextLanguage.state.currentCode);
  }, [language]);

  console.log(revisionQuestions);

  return <Revision questions={questions} />;
};

export default Revisions;
