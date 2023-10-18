import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {SectionChapters} from './index'; 
import {describe, expect, test} from '@jest/globals';// Asegúrate de que la ruta sea correcta

describe('SectionChapters component', () => {
  test("renders SectionChapters", () => {
    const { getByText } = render(<SectionChapters />);

    expect(getByText('SectionChapters')).toBeInTheDocument();
  })

});
