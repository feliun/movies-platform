import React from 'react';
import Header from './Header';
import Features from './Features';
import Timeline from './Timeline';
import Team from './Team';
import Footer from './Footer';
import './style.scss';

const model = {
  header: {
    title: 'The movies platform',
    subtitle: 'A fully-fledged microservices platform',
    button: 'Browse',
  },
  features: {
    title: 'Features',
    subtitle: 'microservices bring some benefits',
    values: [
      {
        title: 'Scalable',
        icon: 'fas fa-boxes',
        description: 'Demanding services can be deployed in multiple servers to enhance performance',
      },
      {
        title: 'Resilient',
        icon: 'fas fa-heartbeat',
        description: 'Failure in one service does not impact other services. Replicas make high availability easier',
      },
      {
        title: 'Decoupled',
        icon: 'fas fa-rocket',
        description: 'Being independent services, they have less chances to impact each other. Plus, development and fast deployment can happen in parallel without much headache',
      },
    ],
  },
  timeline: {
    title: 'The Stack',
    subtitle: 'Some of the technologies used to build this platform',
    values: [
      {
        title: 'React & Redux',
        img: 'static/img/tech/react.png',
        description: 'React is a JS library for building user interfaces. It makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
      },
      {
        title: 'Node JS REST API',
        img: 'static/img/tech/node.jpg',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',
      },
      {
        title: 'Mongo DB',
        img: 'static/img/tech/mongo.png',
        description: 'MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents.',
      },
      {
        title: 'microservices',
        img: 'static/img/tech/microservices.png',
        description: 'Microservices is a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services should be fine-grained and the protocols should be lightweight.',
      },
      {
        title: 'CI/CD',
        img: 'static/img/tech/travis.png',
        description: 'Continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day. Its aim is to prevent integration problems. We used Travis as CI server for this platform.',
      },
      {
        title: 'Docker',
        img: 'static/img/tech/docker.png',
        description: 'Docker is the only container platform provider to address every application across the hybrid cloud. Docker enables true independence between applications and infrastructure and developers and IT ops to unlock their potential and creates a model for better collaboration and innovation.',
      },
      {
        title: 'Terraform',
        img: 'static/img/tech/terraform.png',
        description: 'Terraform enables you to safely and predictably create, change, and improve infrastructure. It is an open source tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.',
      },
      {
        title: 'AWS',
        img: 'static/img/tech/aws.png',
        description: 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.',
      },
    ],
  },
  team: {
    title: 'About the author',
    subtitle: 'Microservices advocate, TDD practitioner, full stack engineer and continuous learner. Digital transformer and MD at GuideSmiths Spain',
    bottom: '',
    members: [
      {
        name: 'Felipe Polo',
        position: 'Managing Director @GuideSmiths Spain',
        img: 'static/img/felipe.jpg',
        twitter: 'http://www.twitter.com/feliun',
        linkedin: 'https://www.linkedin.com/in/feliun/',
        github: 'https://github.com/feliun',
      },
    ],
  },
  footer: {
    copyright: 'Copyright© GuideSmiths',
    twitter: 'http://www.twitter.com/guidesmiths',
    linkedin: 'https://www.linkedin.com/company/guidesmiths/',
    github: 'https://github.com/guidesmiths',
    privacy: 'https://www.guidesmiths.com/en/privacy-policy',
    termsOfUse: 'https://www.guidesmiths.com/en/terms-and-conditions',
  },
};

const Landing = () => (
  <div>
    <div id="page-top">
      <Header data={model.header} />
      <Features data={model.features} />
      <Timeline data={model.timeline} />
      <Team data={model.team} />
      <Footer data={model.footer} />
    </div>
  </div>
);

export default Landing;
