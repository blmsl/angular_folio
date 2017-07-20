import { linkAttrs } from './index';
const rootLink = '../assets/cam/';


export default {
  id: 2,
  cat: 'work',
  slug: 'cam',
  intro: {
    title: 'CAMMS',
    desc: 'SAAS Corporate Site & Software Portfolio',
    icon: `${rootLink}monitor-2.svg`,
    style: {
      color: '#fff',
      background: 'linear-gradient(#055492 50%, #143B53)'
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [ {
        type: 'text',
        class: 'intro-text',
        value: `
        <h4>The Project</h4>
        <p>A corporate ‘brochure’ website for an international SAAS company.</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at [Minerva creative]</p>
        <h4>The Toolkit</h4>
        <p>WordPress | Foundation</p>
        `,
      }]
    }, {
      class: 'text-row push-right',
      content: [{
        type: 'text',
        value: `
        <h4 class="text-center" >View
          <a href="https://www.cammsgroup.com/" ${linkAttrs} >live site</a>
        </h4>
        `,
      }],
    }, {
      class: 'align-tops',
      style: {
        background: `url(${rootLink}bg-health.jpg) top/cover`,
        color: '#fff',
      },
      content: [{
        type: 'text',
        value: `
        <p>The task was a complete modernisation of the existing CAMMS site. The original site was
        overflowing with text-only content, and our role was to present this information to the
        customers in a site that was clearer for the user and easier to maintain by the team at CAMMS.</p>
        <p>The project was built under a short timescale, from concept to deployment in three months.</p>
        `,
      }, {
        type: 'image',
        class: 'content-overlap',
        height: '200%',
        value: `${rootLink}home.jpg`,
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>My role as lead developer was to oversee production of a number of highly modular and
        customisable templates. CAMMS offers a large number of software solutions, tools, and services
        at varying levels of detail. This information is presented on the site with only a few, highly
        flexible templates.</p>
        <p>I also animated all SVG icons on the site, and an interactive map showcasing the company’s
        international offices.</p>
        `,
      }],
    }, {
      style: {
        backgroundColor: '#2079bf',
      },
      class: 'align-tops',
      content: [{
        type: 'image',
        height: '209%',
        value: `${rootLink}solutions.jpg`,
      }, {
        type: 'image',
        height: '141%',
        value: `${rootLink}budget.jpg`,
      }, {
        type: 'image',
        height: '192%',
        value: `${rootLink}community.jpg`,
      }],
    }, {
      class: 'flex-mobile',
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}ico-chat.svg`,
      }, {
        type: 'image',
        height: '100%',
        value: `${rootLink}ico-finance.svg`,
      }, {
        type: 'image',
        height: '100%',
        value: `${rootLink}ico-screen.svg`,
      }, {
        class: 'flex-triple',
        type: 'image',
        height: '50%',
        value: `${rootLink}map.svg`,
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

// todo - SIMPLIFY MAP ??
