import { FilterProps } from '../type';
import { LanguagesFilterProps } from './type';
import { LANGUAGE_TITLE } from '../constants';
import Checkbox from '@/components/Checkbox';

function LanguagesFilter({ languages, languagesChecked = [] }: LanguagesFilterProps) {
  return (
    <>
      <h2 className="languages-filter-title">{LANGUAGE_TITLE}</h2>
      <div className="languages-filter-checkbox">
        {languages?.map((language: FilterProps, index: number) => (
          <Checkbox
            key={index}
            name={language.keyword}
            isChecked={languagesChecked?.includes(language.keyword)}
            className="languages-filter-label"
          >
            {language.name}
          </Checkbox>
        ))}
      </div>
    </>
  );
}

export default LanguagesFilter;
