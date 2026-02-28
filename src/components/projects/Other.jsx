import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem, Link } from '@carbon/react';

export const Other = ({ title, subtitle, paragraphs, action }) => {
  return (
    <div>
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">Websites</Heading>
          </Section>
          <div className="sb--portfolio-project__content">
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <p>ARTchitects – local architecture firm wanting minimal clean site showing their services</p>
              <img
                src="/personal-artchitects.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the dialog self-aligning prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
              <p>Personal website – minimalistic design as launchpad to social media</p>
              <img
                src="/personal-web-1.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the initial released version of the dialog."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-3">
              <p>Personal website – full screen magazine style experience</p>
              <img
                src="/personal-web-2.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the re-designed dialog."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-4">
              <p>Personal website – portfolio</p>
              <img
                src="/personal-web-3.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the re-implemented dialog in React and updated to the latest design system."
              />
            </div>
          </div>
        </Column>
      </Grid>
    </div>
  );
};
