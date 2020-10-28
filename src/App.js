import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';


import Header from './components/Header';


function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, [])


  async function handleAddProject () {
    // setProjects([...projects, `Novo pojeto ${Date.now()}`])
    const response = await api.post('/projects', {
      title: 'Frontend com React',
      owner: 'Marcio Rodrigues'
    })

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <div className="App">
      <Header title='Homepage2' />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type='button' onClick={handleAddProject}>Add novo projeto</button>
    </div>
  );
}

export default App;
