import React, { useState, useEffect } from 'react';
import { FilteredPrograms } from './ProgramFunctions';
import { Program } from '../../interfaces/interfaces';
import '../../slyles/Programs.css';

const Programs: React.FC<{ programType: string }> = ({ programType }) => {
  const [programsData, setProgramsData] = useState<Program[]>([]);

  useEffect(() => {
    const filteredData = FilteredPrograms(programType);
    setProgramsData(filteredData);
  }, [programType]);

  return (
    <div className="Grid-container">
      {programsData.map((item) => (
        <div className='Grid-item'>
          <img className='Image-product' alt={item.title} 
            src={item.images['Poster Art'].url} />
            <div className='Containar-title--product'> 
             <p><span>{item.title}</span></p>
            </div>
        </div>
      ))}
    </div>
  );
};

export { Programs };

