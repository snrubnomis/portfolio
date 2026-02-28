/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { AboutMe } from '../../components/aboutMe/AboutMe';
import { PageLayout } from '../../layouts/page-layout';

import { useLocation } from 'react-router';

const NotFound = () => {
  const location = useLocation();
  return (
    <PageLayout
      className="sb--not-found"
      fallback={<p>Loading not found page...</p>}
    >
      <AboutMe
        title={'Page not found'}
        paragraphs={[
          <>This is not the page you were looking for.</>,
          <>
            The route <em>&lsquo;{location.pathname}&rsquo;</em> is not
            recognized.
          </>,
          <>Maintained by fed-at-ibm, a chapter of the OIC.</>,
        ]}
      />
    </PageLayout>
  );
};

export default NotFound;
