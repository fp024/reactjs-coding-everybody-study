import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router';

const contents = [
  { id: 1, title: 'HTML', description: 'HTML is...' },
  { id: 2, title: 'JS', description: 'JS is...' },
  { id: 3, title: 'React', description: 'React is...' },
];

function Topic() {
  const params = useParams();
  const topic_id = params.topic_id;
  const not_found_topic = {
    title: 'Sorry',
    description: 'Not Found',
  };

  const found_topic = contents.find((c) => c.id === Number(topic_id));
  const selected_topic = found_topic === undefined ? not_found_topic : found_topic;

  console.log(topic_id);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
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
        <Route path=":topic_id" element={<Topic />} /> {/* 여기는 앞 경로를 빼줘야함. ? */}
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

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
