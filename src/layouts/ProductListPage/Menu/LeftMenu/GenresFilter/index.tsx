import { FilterProps } from '../type';
import { GenresFilterProps } from './type';
import { GENRE_TITLE } from '../constants';
import Checkbox from '@/components/Checkbox';

function GenresFilter({ genres, genresChecked = [] }: GenresFilterProps) {
  return (
    <>
      <h2 className="genres-filter-title">{GENRE_TITLE}</h2>
      <div className="genres-filter-checkbox">
        {genres?.map((genre: FilterProps, index: number) => (
          <Checkbox
            key={index}
            name={genre.keyword}
            isChecked={genresChecked?.includes(genre.keyword)}
            className="genres-filter-label"
          >
            {genre.name}
          </Checkbox>
        ))}
      </div>
    </>
  );
}

export default GenresFilter;
