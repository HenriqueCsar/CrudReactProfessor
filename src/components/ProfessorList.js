import React from 'react';

const ProfessorList = ({ professors, deleteProfessor, editProfessor }) => {
  return (
    <div>
      {professors.length === 0 ? (
        <p>Nenhum professor cadastrado.</p>
      ) : (
        <ul>
          {professors.map((professor) => (
            <li key={professor.id}>
              <div className="professor-info">
                <div>
                  <strong>Nome:</strong>
                  <span className="professor-text">{professor.name}</span>
                </div>
                <div>
                  <strong>Email:</strong>
                  <span className="professor-text">{professor.email}</span>
                </div>
                <div>
                  <strong>Curso:</strong>
                  <span className="professor-text">{professor.course}</span>
                </div>
              </div>
              <div className="button-group">
                <button className="edit-btn" onClick={() => editProfessor(professor.id)}>
                  Editar
                </button>
                <button className="delete-btn" onClick={() => deleteProfessor(professor.id)}>
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfessorList;
