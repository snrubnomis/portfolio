/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PageLayout } from '../../layouts/page-layout.jsx';
import { Landing } from '../../components/landing/Landing.jsx';

const Welcome = () => {
  return (
    <PageLayout
      className="sb--welcome"
      fallback={<p>Loading welcome page...</p>}
    >
      <Landing />
    </PageLayout>
  );
};

export default Welcome;
