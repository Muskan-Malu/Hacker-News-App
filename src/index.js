// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {App} from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { User } from './components/User';
import { UserSubmission } from './components/UserSubmission';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CommentsContainer } from './containers/CommentsContainer';
import { StoriesContainer } from './containers/SoriesContainer';

ReactDOM.render(

  <React.StrictMode>

    <Router>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:story" element={<StoriesContainer />} />
        <Route path="/user/:userId.json" element={<User />} />
        <Route path="/userSubmission/:userId" element={<UserSubmission />} />
        <Route path="/userComments/:storyId" element={<CommentsContainer />} />
      </Routes>

    </Router>

  </React.StrictMode>,

  document.getElementById('root')
);
