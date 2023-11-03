import React, { useState } from 'react';

interface CardProgramProps {
  image: { url: string };
  title: string;
  description: string;
  releaseYear: string;
}

function CardProgram(props: CardProgramProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Card">
      <img src={props.image.url} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.releaseYear}</p>

      {modalOpen && (
        <div className="Modal">
          <div className="Modal-container">
            <span className="Close-modal" onClick={closeModal}>
              X
            </span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.releaseYear}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardProgram;
