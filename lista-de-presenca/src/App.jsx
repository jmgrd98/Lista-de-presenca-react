import React, {useState} from 'react'
import { useEffect } from 'react';
import './App.css'
import {Card} from './components/cards/cards'

export default function App(){

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});
  
  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'})
    }
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/jmgrd98`)
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    })
    .catch(console.error("Erro!"))
  }, [])

  return (
    <div className="App">
      <body>
        <header>
          <h1>Lista de presença</h1>
          <div>
            <strong>{user.name}</strong>
          <img src={user.avatar} alt="Avatar Github" />
          </div>
        </header>
        <input type="text" placeholder="Insira o nome aqui" onChange={e => setStudentName(e.target.value)}/>
        <button type="submit" onClick={handleAddStudent}>Adicionar</button>

        {
          students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
        }
      </body>
    </div>
  );
}
