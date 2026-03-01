import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem } from '@carbon/react';

export const ApiConnect = ({ title, subtitle, paragraphs, action }) => {
  return (
    <div>
    <Grid className="sb--portfolio-project__cloud-data-services">
      <Column sm={4} md={8} lg={16}>
        <Section className="sb--portfolio-project__header__description">
          <Heading className="sb--portfolio-project__subtitle">API Connect</Heading>
          <p>IBM API Connect is a comprehensive, hybrid, and multi-cloud API management solution that facilitates the entire API lifecycle, from creation and testing to security and management.</p>
        </Section>
        <div className="sb--portfolio-project__content">
          <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
            <p>Full Swagger editing capabilities to define APIs</p>
            <img
              src="/api-swagger.jpeg"
              className="sb--portfolio-project__img"
              alt="This image shows the API Connect Swagger editing capabilities."
            />
          </div>
          <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
            <p>Various views of data to provide analytical insights</p>
            <img
              src="/api-analytics.jpeg"
              className="sb--portfolio-project__img"
              alt="This image shows the IBM API Connect analytics views."
            />
          </div>
          <Section className="sb--portfolio-project__description">
            <UnorderedList>
              <ListItem><strong>Led the end-to-end development</strong> of major features of the API Connect UI.</ListItem>
              <ListItem><strong>Rapidly created the initial UI</strong> for the first version of the product.</ListItem>
              <ListItem><strong>Supported major design refreshes</strong> in every release.</ListItem>
              <ListItem><strong>Modernised the interface</strong> by migrating to a newer UI framework in a staged approach where the two frameworks co-existed, to avoid impact on feature delivery.</ListItem>
            </UnorderedList>
          </Section>
        </div>
      </Column>
    </Grid>
    </div>
  );
};
