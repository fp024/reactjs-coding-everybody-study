import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function TopicContent(props) {
  return (
    <div>
      <h3>{props.content}</h3>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  const LIs = [];

  const contents = [
    { id: 1, title: 'HTML', description: 'HTML is...' },
    { id: 2, title: 'JS', description: 'JS is...' },
    { id: 3, title: 'React', description: 'React is...' },
  ];

  contents.forEach((c) => {
    LIs.push(
      <li key={c.id}>
        <NavLink to={`/topics/${c.id}`}>{c.title}</NavLink>
      </li>,
    );
  });

  return (
    <div>
      <h2>Topics</h2>
      <ul>{LIs}</ul>
      <Routes>
        <Route path="1" element={<TopicContent content="HTML is..." />} />
        <Route path="2" element={<TopicContent content="JS is..." />} />
        <Route path="3" element={<TopicContent content="React is..." />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
