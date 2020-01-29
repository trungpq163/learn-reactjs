const Title = React.createElement('div', {
    className: 'title'
}, 'Hello World!');

const Image = React.createElement('img', {
    src: 'http://lorempixel.com/400/200'    
});

const App = React.createElement('div', null, Title, Image);
const root = document.getElementById('root');
ReactDOM.render(App, root);