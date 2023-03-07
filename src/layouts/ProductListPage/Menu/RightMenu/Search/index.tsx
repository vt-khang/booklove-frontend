import { SearchProps } from './type';
import { SEARCH_TITLE } from '../constants';

function Search({ num = 0 }: SearchProps) {
  return (
    <>
      <h2 className="search-title">{SEARCH_TITLE}</h2>
      <span className="search-title-result">{'(' + num + ' kết quả)'}</span>
    </>
  );
}

export default Search;
