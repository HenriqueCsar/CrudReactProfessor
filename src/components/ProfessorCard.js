import React, { useState, useEffect } from 'react';

const ProfessorForm = ({ addProfessor, updateProfessor, editingProfessor, setEditingProfessor }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    if (editingProfessor) {
      setName(editingProfessor.name);
      setEmail(editingProfessor.email);
      setCourse(editingProfessor.course);
    } else {
      setName('');
      setEmail('');
      setCourse('');
    }
  }, [editingProfessor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfessor = {
      id: Date.now(),
      name,
      email,
      course,
    };

    if (editingProfessor) {
      updateProfessor({ ...editingProfessor, name, email, course });
    } else {
      addProfessor(newProfessor);
    }

    setName('');
    setEmail('');
    setCourse('');

    if (typeof setEditingProfessor === 'function') {
      setEditingProfessor(null);
    }
  };

  const modalTitle = editingProfessor ? 'Editar Professor' : 'Adicionar Professor';

  return (
    <div>
      <h2>{modalTitle}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Curso:
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </label>
        <button type="submit">{editingProfessor ? 'Salvar Alterações' : 'Adicionar Professor'}</button>
      </form>
    </div>
  );
};

export default ProfessorForm;
