import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem } from '@carbon/react';

export const AboutMe = ({ title, subtitle, paragraphs, action }) => {
  return (
    <Grid as="header" className="sb--about-me">
      <Column sm={4} md={8} lg={16}>
        <div className="sb--about-me__content">
          <Section className="sb--about-me__other">
            <Heading className="sb--about-me__subtitle">Introduction</Heading>
            <p>I am the User Experience Engineering Lead driving innovation for IBM Cloud Data Services. With 
    a proven ability to bridge design and engineering, I transform complex concepts into intuitive, 
    high-quality user experiences. My expertise spans modern front-end technologies including 
    React, Redux, HTML5, SASS/CSS, NodeJS, and design tools such as Figma, enabling me to 
    deliver solutions that are both visually compelling and technically robust.</p>
            <p>As a trusted team leader and mentor, I foster growth and collaboration, empowering both junior and senior 
    developers and ensuring best practices across distributed teams. My experience working with 
    global teams has honed my ability to lead effectively in remote and cross-cultural environments.</p>
            <p>Creativity and innovation are at the core of my approach. I hold multiple patents for inventive work 
    at IBM, reflecting my commitment to solving problems in novel ways. Beyond my professional 
    achievements, I channel creativity into music and art, continually expanding my perspective.</p>
            <p>I am passionate about crafting exceptional user experiences that combine design elegance with 
    engineering excellence and always pushing boundaries to deliver impactful, user-centric solutions.</p>
          </Section>
          <Section className="sb--about-me__key-points">
            <Heading className="sb--about-me__subtitle">Key Points</Heading>
            <UnorderedList>
              <ListItem>24+ years of enterprise software development</ListItem>
              <ListItem>Adaptability to new projects and technologies</ListItem>
              <ListItem>Inventor & mentor</ListItem>
              <ListItem>Experienced in Agile development</ListItem>
              <ListItem>Ability to think creatively and solve problems</ListItem>
              <ListItem>Experienced Front-End Developer</ListItem>
              <ListItem>Experienced Team Lead & Technical Leader</ListItem>
              <ListItem>Experienced UX Reviewer</ListItem>
              <ListItem>Experienced in building accessible UIs</ListItem>
            </UnorderedList>
            <Heading className="sb--about-me__subtitle">Education</Heading>
            <UnorderedList>
              <ListItem>BSc (Hons) Computer Science (First Class) University of St Andrews</ListItem>
            </UnorderedList>
          </Section>
        </div>
      </Column>
    </Grid>
  );
};
