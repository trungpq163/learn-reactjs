// Viết ra danh sách các cuốn sách mà bạn thích sử dụng các React element ul, li (dùng React.createElement) 
const Book1 = React.createElement('li', null, 'Code dao ky su');
const Book2 = React.createElement('li', null, 'Chung ta song trong 2 the gioi');
const Book3 = React.createElement('li', null, 'Lam vi tien');

const ArrBook = [Book1, Book2, Book3];
const App = React.createElement('ol', null, ArrBook);
const root = document.getElementById('root');
ReactDOM.render(App, root);
