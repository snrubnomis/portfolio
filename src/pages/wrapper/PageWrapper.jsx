/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PageLayout } from '../../layouts/page-layout.jsx';
import { PageHeader } from '@carbon/ibm-products';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.

const PageWrapper = ({ children, title }) => {
  return (
    <PageLayout
      className="sb--page-wrapper"
      fallback={<p>Loading page...</p>}
    >
      <PageLayout.Header>
        <PageHeader title={title} />
      </PageLayout.Header>
      
      {children}
    </PageLayout>
  );
};

export default PageWrapper;
