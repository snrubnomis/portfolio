import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem } from '@carbon/react';

export const Experience = ({ title, subtitle, paragraphs, action }) => {
  return (
    <Grid as="header" className="sb--experience">
      <Column sm={4} md={8} lg={16}>
        <div className="sb--experience__content">
          <Section className="sb--experience__experience">
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[01/2021 – Present]</span> IBM Cloud Data Services</Heading>
              <UnorderedList>
                <ListItem>UX Engineering Lead of IBM Event Streams and IBM Cloud Databases.</ListItem>
                <ListItem>UX reviewer – reviewing user experiences across IBM </ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[01/2016 – 12/2020]</span> IBM Watson AI</Heading>
              <UnorderedList>
                <ListItem>UX Engineering Lead of IBM Watson Assistant tooling to configure and train Watson AI.</ListItem>
                <ListItem>Received an Outstanding Technical Achievement Award.</ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[04/2012 – 12/2015]</span> IBM API Connect</Heading>
              <UnorderedList>
                <ListItem>Lead developer of Cloud Management Console, rapidly developing new web UI to manage solution environment</ListItem>
                <ListItem>Lead developer of analytics capabilities, coordinating across global teams, and producing high quality visual renderings with role-specific relevant analytics data.</ListItem>
                <ListItem>Designer and developer of the mobile experience for 3 adaptive UIs.</ListItem>
                <ListItem>Product Patent lead, reviewing patents and mentoring inventors to protect IBM IP.</ListItem>
                <ListItem>Customer advocate for global retail company, supporting them as they go into production, and managing their requirements.</ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[03/2012 – 09/2013]</span> WebSphere Cast Iron</Heading>
              <UnorderedList>
                <ListItem>Lead developer of the Web Management Console, designing and developing new functionality.</ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[10/2008 – 02/2012]</span> WebSphere Service Registry and Repository</Heading>
              <UnorderedList>
                <ListItem>Lead developer of the UI, designing and developing a new web UI over several product releases.</ListItem>
                <ListItem>Customer advocate for a large US bank, assisting with critical situations, general issues and queries. Also supporting migration and updates.</ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[01/2007 – 09/2008]</span> IBM Software Group Strategy</Heading>
              <UnorderedList>
                <ListItem>Lead developer of product advisor application, designing and developing the application and its interactions with other applications.</ListItem>
                <ListItem>Consultant developer for Team Integrator for Eclipse-based Tools, providing expertise in Eclipse and internal tooling.</ListItem>
                <ListItem>Lead developer of WebSphere MQ-CICS Bridge to integrate WebSphere MQ and CICS.</ListItem>
                <ListItem>Developed reusable assets to bootstrap projects.</ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[10/2005 – 12/2005]</span> Eclipse Equinox (OSGi)</Heading>
              <UnorderedList>
                <ListItem>Lead developer of the OSGi resolver for Eclipse, including rapid prototyping against the RFC and feeding back into the specification.</ListItem>
              </UnorderedList>
            </div>
            <div className="sb--experience__item">
              <Heading className="sb--experience__subtitle"><span className="sb--experience__subtitle-date">[07/2001 – 12/2006]</span> Java SE 1.3.1 – Java SE 6.0</Heading>
              <UnorderedList>
                <ListItem>Lead tooling developer (Java 6.0), designing and developing new process and tools to reduce 18 months of development effort to a few days.</ListItem>
                <ListItem>Member of IBM Software Group Architecture Board, defining strategic direction.</ListItem>
                <ListItem>Lead install developer (Java 5.0), enabling new installation technology across 18 platforms.</ListItem>
                <ListItem>Lead developer of class loading, resettable JVM and shared classes (Java 1.4.1 – 1.4.2)</ListItem>
              </UnorderedList>
            </div>
          </Section>
          {/* {action} */}
        </div>
      </Column>
    </Grid>
  );
};
