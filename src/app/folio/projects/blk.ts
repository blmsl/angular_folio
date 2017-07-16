

import { linkAttrs } from './index';
const rootLink = '../assets/blk/';


export default {
  id: 1,
  cat: 'play',
  slug: 'blk',
  intro: {
    title: 'Blackjack Vue.js',
    desc: 'Vue.js | ES6 | Games Development',
    icon: `${rootLink}card-pop.svg`,
    style: {
      color: '#f9a825',
      background: 'linear-gradient(#2a5a30, #152e18)',
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [{
        type: 'svg',
        class: 'frame-1-1',
        value: `${rootLink}vuejs.svg`,
      }, {
        type: 'text',
        class: 'intro-text row-collapse',
        value: `
        <h4>The Project</h4>
        <p>A web app game of Blackjack. Fully playable for up to 5 players.</p>
        <h4>The Role</h4>
        <p>Personal project. Learning Vue.js.</p>
        <h4>The Toolkit</h4>
        <ul>
          <li>Javascript framework = Vue.js with Vuex and ES6</li>
          <li>Built with webpack - postCSS and babel</li>
        </ul>
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h4>View source on
          <a href="https://github.com/jon-r/jr_blackJackVue" ${linkAttrs} >Github</a>
        </h4>
        `,
      }],
    }, {

      // TODO: be nice to link to a demo version of the game that plays automatically
      class: 'blackjack-row',
      content: [{
        type: 'iframe',
        class: 'frame-3-4',
        value: '//jon-richards.com/blackjack-2/',
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>My goal was to learn Vue.js by actually making something with it. The project was built with ES6,
        and I used a number of modern JavaScript features such as the [spread] operator, [arrow] functions
        and [promises]. For backwards compatability I also used webpack with Babel and postCSS.</p>
        <p>The Visuals are all custom made SVG elements. Animations are built with almost entirely CSS only
        transitions, with a few javascript triggers.</p>
        `,
      }],
    }, {
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        class: 'frame-3-4 content-overlap',
        value: `${rootLink}results.png`,
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>I decided to build blackjack for a few reasons. Card games have only a few moving parts for a start.
        Blackjack has a fairly simple set of rules and a typical round only lasts a few minutes.</p>
        <p>Despite the simple rules, there were still a few tricky moments in programming the gameplay, with
        betting and special player actions.</p>
        <p>In Blackjack a player is allowed to ‘split’ a pair into two hands. By paying an extra bet his two
        cards become two independent hands. Because of this rule, special edge cases had to be made in the
        ‘win/lose’ conditions that treated the hands independently from each other, and bets had to be adjusted
        too (losing one hand doesn’t knock the player out instantly)</p>
        `,
      }],
    }, {
      style: {
        background: `url(${rootLink}/noise.png) #2a5a30`,
      },
      class: 'row-collapse',
      content: [{
        type: 'svg',
        class: 'frame-1-4',
        value: `${rootLink}chip.svg`,
      }, {
        type: 'image',
        class: 'frame-1-4',
        value: `${rootLink}cards.svg`,
      }],
    }, {
      style: {
        background: `url(${rootLink}/noise.png) #2a5a30`,
      },
      content: [{
        type: 'svg',
        class: 'frame-1-2',
        value: `${rootLink}table-print.svg`,
      }],
    }, {
      content: [{
        type: 'image',
        class: 'frame-4-3 content-overlap flex-double',
        value: `${rootLink}options.png`,
      }, {
        type: 'image',
        class: 'frame-1-1 image-shadow',
        value: `${rootLink}hand.png`,
      }],
    }, {
      style: {
        backgroundColor: '#fff',
      },
      class: 'row-collapse',
      content: [{
        type: 'image',
        class: 'frame-1-4 image-shadow',
        value: `${rootLink}ctrls.png`,
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};


// ideally make a version that is in the middle of a game?
// some styled iframe to seperate the site? perhaps some screen
