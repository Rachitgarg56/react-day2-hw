const heading = React.createElement('h1',{},'Topics covered');
const subHeading = React.createElement('p',{},'The following is a list of all the topics we cover in the MDN learning area.');

const anchor1 = React.createElement('a',{href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},'Getting started with the web');
const p1 = React.createElement('p',{style:{marginLeft:"1rem"}},'Provides a practical introduction to web development for complete beginners.');

const gettingStartedSection = React.createElement('section',{},anchor1,p1);

const anchor2 = React.createElement('a',{href: "https://developer.mozilla.org/en-US/docs/Learn/HTML"},'HTML — Structuring the web');
const p2 = React.createElement('p',{style:{marginLeft:"1rem"}},'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');

const htmlSection = React.createElement('section',{},anchor2,p2);

const anchor3 = React.createElement('a',{href: "https://developer.mozilla.org/en-US/docs/Learn/CSS"},'CSS — Styling the web');
const p3 = React.createElement('p',{style:{marginLeft:"1rem"}},'CSS is the language that we use to control our web contents style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.');

const cssSection = React.createElement('section',{},anchor3,p3);

const div = React.createElement('div', {style:{maxWidth:"800px", display:"flex", flexDirection: "column", gap: "2rem"}}, heading,subHeading,gettingStartedSection,htmlSection,cssSection);

ReactDOM.render(div,document.getElementById('root'));

