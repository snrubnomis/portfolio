import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem, Link } from '@carbon/react';

export const Websphere = ({ title, subtitle, paragraphs, action }) => {
  return (
    <div>
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">WebSphere Service Registry &amp; Repository</Heading>
          </Section>
          <div className="sb--portfolio-project__content">
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <p><strong>Overview dashboard</strong> – Provides a high-level view of the registered services.</p>
              <img
                src="/wsrr-overview.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the dialog self-aligning prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
              <p><strong>Service details</strong> – Interconnected widgets that work together to provide details of services.</p>
              <img
                src="/wsrr-details.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the initial released version of the dialog."
              />
            </div>
          </div>
        </Column>
      </Grid>
    </div>
  );
};
