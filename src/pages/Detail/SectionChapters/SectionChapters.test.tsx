import { render } from '@testing-library/react';
import SectionChapters from './SectionChapters';

describe('SectionChapters component', () => {
  test("renders SectionChapters", () => {
    const { getByText } = render(<SectionChapters DataDetail={DataDetail}/>);

    // Verifica si el texto "SectionChapters" está presente en el DOM
    expect(getByText('SectionChapters')).toBeInTheDocument();
  });
});
const DataDetail = {
  id: "1",
  image: Chaman,
  title: "El camino del Chaman",
  href: "El-camino-del-Chaman",

  chapters: [
    {
      chapter: 1,
      updateTime: 20,
    },
    {
      chapter: 2,
      updateTime: 18,
    },
    {
      chapter: 3,
      updateTime: 15,
    },
    {
      chapter: 4,
      updateTime:12 ,
    },
    {
      chapter: 5,
      updateTime: 10,
    },
    {
      chapter: 6,
      updateTime: 9,
    },
    {
      chapter: 7,
      updateTime: 8,
    },
    {
      chapter: 8,
      updateTime: 7,
    },
    {
      chapter: 9,
      updateTime: 6,
    },
    {
      chapter: 10,
      updateTime: 5,
    },
    {
      chapter: 11,
      updateTime: 4,
    },
    {
      chapter: 12,
      updateTime: 3,
    },
    {
      chapter: 13,
      updateTime: 2,
    },
    {
      chapter: 14,
      updateTime: 1,
    },
    {
      chapter: 15,
      updateTime: 0,
    },
    
  ],
};