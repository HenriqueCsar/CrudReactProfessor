import React, { useState, useEffect } from 'react';
import ProfessorList from './components/ProfessorList';
import ProfessorCard from './components/ProfessorCard';
import './App.css';

const App = () => {
  const [professors, setProfessors] = useState([]);
  const [editingProfessor, setEditingProfessor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedProfessors = JSON.parse(localStorage.getItem('professors'));
    if (storedProfessors) {
      setProfessors(storedProfessors);
    }
  }, []);

  const addProfessor = (newProfessor) => {
    const updatedProfessors = [...professors, newProfessor];
    setProfessors(updatedProfessors);
    localStorage.setItem('professors', JSON.stringify(updatedProfessors));
    setShowModal(false);
  };

  const deleteProfessor = (id) => {
    const updatedProfessors = professors.filter((professor) => professor.id !== id);
    setProfessors(updatedProfessors);
    localStorage.setItem('professors', JSON.stringify(updatedProfessors));
  };

  const editProfessor = (id) => {
    const professorToEdit = professors.find((professor) => professor.id === id);
    setEditingProfessor(professorToEdit);
    setShowModal(true);
  };

  const updateProfessor = (updatedProfessor) => {
    const updatedProfessors = professors.map((professor) =>
      professor.id === updatedProfessor.id ? updatedProfessor : professor
    );
    setProfessors(updatedProfessors);
    localStorage.setItem('professors', JSON.stringify(updatedProfessors));
    setEditingProfessor(null);
    setShowModal(false);
  };

  const openAddProfessorModal = () => {
    setEditingProfessor(null);
    setShowModal(true);
  };

  return (
    <div className="app">
      <h1>Professor</h1>
      <button className="add-professor-btn" onClick={openAddProfessorModal}>
        Adicionar Professor
      </button>
      <ProfessorList
        professors={professors}
        deleteProfessor={deleteProfessor}
        editProfessor={editProfessor}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <ProfessorCard
              addProfessor={addProfessor}
              updateProfessor={updateProfessor}
              editingProfessor={editingProfessor}
              setEditingProfessor={setEditingProfessor}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
