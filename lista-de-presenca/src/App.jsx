import React, {useState} from 'react'
import './App.css'
import {Card} from './components/cards/cards'

export function App(){

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  
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

  return (
    <div className="App">
      <body>
        <h1>Lista de presença</h1>
        <input type="text" placeholder="Insira o nome aqui" onChange={e => setStudentName(e.target.value)}/>
        <button type="submit" onClick={handleAddStudent}>Adicionar</button>

        {
          students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
        }
      </body>
    </div>
  );
}

export default App;
