import { Column, Grid, Heading, Section, Link } from '@carbon/react';
import { LogoGithub, LogoLinkedin } from '@carbon/icons-react';

export const Landing = ({ title, subtitle, paragraphs, action }) => {
  return (
    <Grid as="header" className="sb--landing">
      <Column sm={4} md={8} lg={16}>
        <div className="sb--landing__content">
          <div className="sb--landing__title">
            <Heading className="sb--landing__title">
              <div>Simon Burns</div>
              <div>UX Engineering Lead</div>
              <div>@ IBM</div>
            </Heading>
            <p>Find out about me on the <Link inline href="/aboutme">About me</Link> page.</p>
            <p>See details of my experience on the <Link inline href="/experience">Experience</Link> page.</p>
            <p>See details of specific projects by choosing one from the navigation.</p>
            <p>While most of the code I write is confidential to IBM, I have a few demos and side projects on GitHub.</p>
          </div>
          <div className="sb--landing__image">
            <img
              src="/simon.jpg"
              className="sb--landing__photo"
              alt="Simon Burns with his pet Ziggy"
            />
          </div>
          <Section className="sb--landing__other">
            <Link href="https://uk.linkedin.com/in/simonburns" rel="nofollow noreferrer" target="_blank">
              <LogoLinkedin />&nbsp;LinkedIn
            </Link> &nbsp; 
            <Link href="https://github.com/snrubnomis" rel="nofollow noreferrer" target="_blank">
              <LogoGithub />&nbsp;Github
            </Link>
          </Section>
        </div>
      </Column>
    </Grid>
  );
};
