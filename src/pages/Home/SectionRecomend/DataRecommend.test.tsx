import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataRecommend from './SectionRecommend';

describe('DataRecommend', () => {
  const mockDataPorts = [
    // Aquí debes proporcionar datos de ejemplo para DataPorts
    // Asegúrate de que haya al menos 4 elementos
  ];

  it('renders without crashing', () => {
    render(<DataRecommend DataPorts={mockDataPorts} />);
    
    // Verifica que el componente se renderiza correctamente
    expect(screen.getByText('Texto de ejemplo')).toBeInTheDocument();
    // Reemplaza 'Texto de ejemplo' con algún texto que se espera encontrar en el componente renderizado.
  });

  it('handles next click', () => {
    render(<DataRecommend DataPorts={mockDataPorts} />);
    
    // Simula un clic en el botón de siguiente
    fireEvent.click(screen.getByText('Texto del botón de siguiente'));
    // Reemplaza 'Texto del botón de siguiente' con el texto real del botón de siguiente.

    // Verifica si el estado o el resultado del clic son los esperados
    // Por ejemplo, puedes verificar si el índice se incrementa correctamente.
  });

  it('handles prev click', () => {
    render(<DataRecommend DataPorts={mockDataPorts} />);
    
    // Simula un clic en el botón de anterior
    fireEvent.click(screen.getByText('Texto del botón de anterior'));
    // Reemplaza 'Texto del botón de anterior' con el texto real del botón de anterior.

    // Verifica si el estado o el resultado del clic son los esperados
    // Por ejemplo, puedes verificar si el índice disminuye correctamente.
  });
});
