// Sử dụng React + JSX để render ra 1 thời khoá biểu của bạn (table)
const Thu = <tr><th>Thu2</th><th>Thu3</th><th>Thu4</th><th>Thu5</th><th>Thu6</th><th>Thu7</th></tr>;
const Lamviec = <tr><th>html</th><th>css</th><th>js</th><th>reactjs</th><th>vue</th><th>angular</th></tr>;

const App = React.createElement('table', null, Thu, Lamviec);
const root = document.getElementById('root');
ReactDOM.render(App, root);