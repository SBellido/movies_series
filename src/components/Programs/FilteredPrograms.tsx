import { Program } from "../../interfaces/interfaces";
import { database } from "../../services/serviceData";

const FilteredPrograms = (programType: string): Program[] => {
  return database.entries
    .filter((item) => item.programType === programType && item.releaseYear >= 2010)
    .map((item) => ({
      programData: item,
      title: item.title,
      releaseYear: item.releaseYear,
      programType: item.programType,
      images: item.images,
      description: item.description
    }))
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20);
};

export { FilteredPrograms };
// import React, { useState, useEffect } from 'react';
// import { getSeries } from '../Programs/ProgramFunctions';
// import CloseIcon from '@mui/icons-material/Close';
// import { Program } from '../../interfaces/interfaces';
// import '../Programs.css';

// const SerieList: React.FC = () => {
//   const [seriesData, setSeriesData] = useState<Program[]>([]);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [serieSelected, setSerieSelected] = useState<Program | null>(null);

//   useEffect(() => {
//     const data = getSeries();
//     const filteredData = data
//       .filter((item: Program) => item.releaseYear >= 2010 && item.programType === 'series')
//       .sort((a, b) => a.title.localeCompare(b.title))
//       .slice(0, 20);

//     setSeriesData(filteredData);
//   }, []);

//   const openModal = (serie: Program) => {
//     setSerieSelected(serie);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSerieSelected(null);
//     setModalOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <div className='Container-title'>
//         <h3 className='Title'>Popular Series</h3>
//       </div>
//       <div className="Grid-container">
//         {seriesData.map((item) => (
//           <div key={item.title} className="Grid-item" onClick={() => openModal(item)}>
//             <img className="Image-product" src={item.images['Poster Art'].url} alt={item.title} />
//             <div className='Containar-title--product'>
//               <span>{item.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {modalOpen && serieSelected && (
//         <div className="Background">
//           <div className="Modal-container">
//             <img
//               className="Image-modal"
//               src={serieSelected.images['Poster Art'].url}
//               alt={serieSelected.title}
//             />
//             <div className='Contenier-info--modal'>
//               <div className="Container-close--modal">
//                 <CloseIcon
//                   type="close"
//                   onClick={closeModal}
//                 />
//               </div>
//               <div className='Container-text--modal'>
//                 <h3 className='Title-modal'>{serieSelected.title}</h3>
//                 <span>Año: {serieSelected.releaseYear}</span>
//                 <p className='Sinapsis'>
//                   <span>Sinopsis:</span>
//                 </p>
//                 <p>{serieSelected.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export { SerieList };
