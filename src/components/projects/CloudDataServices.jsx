import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem } from '@carbon/react';

export const CloudDataServices = ({ title, subtitle, paragraphs, action }) => {
  return (
    <div>
    <Grid className="sb--portfolio-project__cloud-data-services">
      <Column sm={4} md={8} lg={16}>
        <Section className="sb--portfolio-project__header__description">
          <Heading className="sb--portfolio-project__subtitle">Event Streams</Heading>
        </Section>
        <div className="sb--portfolio-project__content">
          <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
            <p>Landing page with help to get started</p>
            <img
              src="/es-landing.jpeg"
              className="sb--portfolio-project__img"
              alt="This image shows the IBM Event Streams landing page which provides help to get started."
            />
          </div>
          <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
            <p>Overview page with service details and health (light theme)</p>
            <img
              src="/es-overview.jpeg"
              className="sb--portfolio-project__img"
              alt="This image shows the IBM Event Streams overview page with service details and health information."
            />
          </div>
          <Section className="sb--portfolio-project__description">
            <UnorderedList>
              <ListItem><strong>Led the end-to-end development</strong> of the IBM Event Streams cloud service UI, driving product vision, architecture, and delivery.</ListItem>
              <ListItem><strong>Decoupled the cloud UI</strong> from the on-premise product and migrated to a dedicated, modern CI/CD pipeline for independent releases.</ListItem>
              <ListItem><strong>Modernised the interface</strong> by adopting the latest IBM Design Language standards and upgrading core component libraries.</ListItem>
              <ListItem><strong>Delivered major React version migrations</strong>, ensuring long-term stability, performance, and maintainability.</ListItem>
              <ListItem><strong>Designed and implemented a new “Getting Started” experience and in-product help system</strong>, improving onboarding and user success.</ListItem>
              <ListItem><strong>Built new cross-product streaming functionality</strong>, seamlessly integrating three IBM offerings into a unified workflow.</ListItem>
              <ListItem><strong>Supported a full service replatforming</strong>, enabling smoother operations and improved scalability.</ListItem>
              <ListItem><strong>Led an accessibility initiative</strong>, using AI-assisted tooling to drive the UI toward compliance and inclusive design.</ListItem>
            </UnorderedList>
          </Section>
        </div>
      </Column>
    </Grid>
    <Grid className="sb--portfolio-project__cloud-data-services">
      <Column sm={4} md={8} lg={16}>
        <Section className="sb--portfolio-project__header__description">
          <Heading className="sb--portfolio-project__subtitle">Cloud Databases</Heading>
        </Section>
        <div className="sb--portfolio-project__content">
          <div className="sb--portfolio-project__image">
            <p>Overview page with service details</p>
            <img
              src="/icd-overview.jpeg"
              className="sb--portfolio-project__img"
              alt="This image shows the IBM Cloud Databases overview page with service details."
            />
          </div>
          <div className="sb--portfolio-project__image">
            <p>Connection details (light theme)</p>
            <img
              src="/icd-connection.jpeg"
              className="sb--portfolio-project__img"
              alt="This image shows the IBM Cloud Databases connection details page."
            />
          </div>
          <Section className="sb--portfolio-project__description">
            <UnorderedList>
              <ListItem><strong>Led the end-to-end development</strong>of the IBM Cloud Databases cloud service UI, driving product vision, architecture, and delivery.</ListItem>
              <ListItem><strong>Supporting 8 different databases</strong> through a shared UI.</ListItem>
              <ListItem><strong>Migrated to a dedicated, modern CI/CD pipeline</strong> for independent releases.</ListItem>
              <ListItem><strong>Modernised the interface</strong> by adopting the latest IBM Design Language standards and upgrading core component libraries.</ListItem>
              <ListItem><strong>Delivered major React version migrations</strong>, ensuring long-term stability, performance, and maintainability.</ListItem>
              <ListItem><strong>Supported a full service replatforming</strong>, enabling smoother operations and improved scalability.</ListItem>
              <ListItem><strong>Led an accessibility initiative</strong>, using AI-assisted tooling to drive the UI toward compliance and inclusive design.</ListItem>
            </UnorderedList>
          </Section>
        </div>
      </Column>
    </Grid>
    </div>
  );
};
