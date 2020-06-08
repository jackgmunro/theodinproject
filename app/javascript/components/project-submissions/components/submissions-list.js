import React from 'react';

import Submission from './submission'

const SubmissionsList = ({submissions, userId, openEditModal, openReportModal}) =>
  <div>
    {submissions.map(submission => (
      <Submission
        submission={submission}
        key={submission.id}
        userId={userId}
        openEditModal={openEditModal}
        openReportModal={openReportModal}
      />
    ))}
  </div>

  export default SubmissionsList
