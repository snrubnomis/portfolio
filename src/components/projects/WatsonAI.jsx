import { AspectRatio, Column, Grid, Heading, Section, UnorderedList, ListItem, Link } from '@carbon/react';

export const WatsonAI = ({ title, subtitle, paragraphs, action }) => {
  return (
    <div>
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">Design vision prototype to show stakeholders what was possible</Heading>
          </Section>
          <div className="sb--portfolio-project__content">
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <p>Introductory experience to explain concepts</p>
              <img
                src="/ai-intro.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the introduction page of a design vision prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
              <p>Visualization of training data</p>
              <img
                src="/ai-training-data.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the training data visualization in a design vision prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-3">
              <p>Visualization of runtime data</p>
              <img
                src="/ai-runtime-data.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the runtime data visualization in a design vision prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-4">
              <p>Presentation of conceptual model and state</p>
              <img
                src="/ai-conceptual-model.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the conceptual model and state presentation in a design vision prototype."
              />
            </div>
          </div>
        </Column>
      </Grid>
      
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">Dialog design collaboration, through rapid prototyping and production</Heading>
          </Section>
          <div className="sb--portfolio-project__content">
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <p>Dialog self-aligning prototype to help users follow conversations</p>
              <img
                src="/ai-dialog-prototype.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the dialog self-aligning prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
              <p>Dialog initial released version</p>
              <img
                src="/ai-dialog-first.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the initial released version of the dialog."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-3">
              <p>Dialog re-design to improve information display and actions</p>
              <img
                src="/ai-dialog-redesign.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the re-designed dialog."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-4">
              <p>Re-implement in React, update to latest design system, and expand editing capabilies</p>
              <img
                src="/ai-dialog-react.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the re-implemented dialog in React and updated to the latest design system."
              />
            </div>
          </div>
        </Column>
      </Grid>
      
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">Dialog design exploration</Heading>
          </Section>
          <div className="sb--portfolio-project__content">
            <Section className="sb--portfolio-project__description">
              <p>Pain points:</p>
              <UnorderedList>
                <ListItem>New users have difficulty understanding how to get started.</ListItem>
                <ListItem>New users have difficulty understanding the dialog flow.</ListItem>
              </UnorderedList>
              <p>Ideas to explore:</p>
              <UnorderedList>
                <ListItem>Break the tree up into "flows".</ListItem>
                <ListItem>Render the flows as chats to make it more intuitive.</ListItem>
                <ListItem>Use a mobile first design approach to focus on simplicity.</ListItem>
              </UnorderedList>
            </Section>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <img
                src="/ai-dialog-exploration.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows a dialog design exploration."
              />
            </div>
          </div>
        </Column>
      </Grid>
      
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">Innovative AI demos</Heading>
          </Section>
          <div className="sb--portfolio-project__content">
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <p><strong>Text adventure</strong> – Entire game built in the Watson dialog.</p>
              <img
                src="/ai-text-adventure.jpeg"
                className="sb--portfolio-project__img-small"
                alt="This image shows the dialog self-aligning prototype."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-2">
              <p><strong>Twitter elf bot</strong> – Combined conversation and emotion analysis, integrated into Twitter.</p>
              <img
                src="/ai-twitter-bot.jpeg"
                className="sb--portfolio-project__img-small"
                alt="This image shows the initial released version of the dialog."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-3">
              <p><strong>A cognitive writing game</strong> – Background AI analysing user entered text and advancing a story as they type.</p>
              <img
                src="/ai-cogniwrite.jpeg"
                className="sb--portfolio-project__img-small"
                alt="This image shows the re-designed dialog."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-4">
              <p><strong>Purple Brain – musical conversations</strong> – Integrated conversation, emotional and lyrical analysis, Speech-to-Text and Text-to-Speech.</p>
              <img
                src="/ai-purple-brain.jpeg"
                className="sb--portfolio-project__img-small"
                alt="This image shows the re-implemented dialog in React and updated to the latest design system."
              />
            </div>
            <div className="sb--portfolio-project__image sb--portfolio-project__image-5">
              <p><strong>Murder Mystery</strong> – Used context to track clues and advance the mystery story.</p>
              <img
                src="/ai-murder-mystery.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows the re-implemented dialog in React and updated to the latest design system."
              />
            </div>
          </div>
        </Column>
      </Grid>
      
      <Grid className="sb--portfolio-project__cloud-data-services">
        <Column sm={4} md={8} lg={16}>
          <Section className="sb--portfolio-project__header__description">
            <Heading className="sb--portfolio-project__subtitle">Conversational Design</Heading>
            <p>Published innovative guide to conversational design: <Link inline href="https://chatbotslife.com/conversational-design-d4abe8cce157">https://chatbotslife.com/conversational-design-d4abe8cce157</Link></p>
          </Section>
          <div className="sb--portfolio-project__content">
            <div className="sb--portfolio-project__image sb--portfolio-project__image-1">
              <img
                src="/ai-conversational-design.jpeg"
                className="sb--portfolio-project__img"
                alt="This image shows a dialog design exploration."
              />
            </div>
          </div>
        </Column>
      </Grid>
    </div>
  );
};
