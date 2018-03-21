import React from 'react';
import Head from '../../Layout/Head';
import Header from './header';
import Features from './features';
import Timeline from './timeline';
import Team from './team';
import Footer from './footer';

const model = {
  header: {
    title: 'The movies platform',
    search: {
      title: 'Find a movie...',
      button: 'Search!',
    },
  },
  features: {
    title: 'Features',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    values: [
      {
        title: 'E-commerce',
        icon: 'fa-shopping-cart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      },
      {
        title: 'Responsive Design',
        icon: 'fa-laptop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      },
      {
        title: 'Web Security',
        icon: 'fa-lock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      },
    ],
  },
  timeline: {
    title: 'The Stack',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    values: [
      {
        title: 'React & Redux',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'Node JS REST API',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'Mongo DB',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'microservices',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'CI/CD',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'Docker',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'Terraform',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
      {
        title: 'AWS',
        img: 'img/about/1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      },
    ],
  },
  team: {
    title: 'About the author',
    subtitle: 'The eyes behind the code',
    bottom: 'Microservices advocate, TDD practitioner, full stack engineer and continuous learner. Digital transformer and MD at GuideSmiths Spain',
    members: [
      {
        name: 'Felipe Polo',
        position: 'Managing Director @GuideSmiths Spain',
        img: 'img/team/1.jpg',
        twitter: 'http://www.twitter.com/feliun',
        linkedin: '',
        github: '',
      },
    ],
  },
  footer: {
    copyright: 'Copyright &copy; GuideSmiths 2018',
    twitter: 'http://www.twitter.com/guidesmiths',
    linkedin: '',
    github: '',
    privacy: '',
    termsOfUse: '',
  },
};

const Landing = () => (
  <div>
    <style>{`
      body {
        overflow-x: hidden;
        font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
      }

      .text-primary {
        color: #fed136 !important;
      }

      section {
        padding: 100px 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 700;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
    </style>
    <Head />
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
