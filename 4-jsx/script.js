const Title = <div className='title'>React Tutorials </div>;

const Image = <img src='http://lorempixel.com/400/200'></img>;

const App = React.createElement('div', null, Title, Image);
const root = document.getElementById('root');
ReactDOM.render(App, root);