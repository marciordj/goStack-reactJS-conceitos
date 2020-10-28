import React, { useState } from 'react';
import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento App', 'Backend'])


  function handleAddProject () {
    setProjects([...projects, `Novo pojeto ${Date.now()}`])
  }

  return (
    <div className="App">
      <Header title='Homepage2' />

      <img width={200} src={backgroundImage} alt='teste de img' />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type='button' onClick={handleAddProject}>Add novo projeto</button>
    </div>
  );
}

export default App;
