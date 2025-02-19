import Revision from './Revision';
import { revisionQuestions } from '../../../utils/RevisionQuestions';

const Revisions = () => {
  return (
    <>
      <Revision questions={revisionQuestions} />
    </>
  );
};

export default Revisions;
