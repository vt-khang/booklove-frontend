import { useRouter } from 'next/router';
import { useFetchLanguages } from '@/pages/api/useFetchLanguages';
import { useFetchCategories } from '@/pages/api/useFetchCategories';
import { useForm, FormProvider } from 'react-hook-form';
import { FILTER_TITLE, APPLY_BUTTON } from './constants';
import LanguagesFilter from './LanguageFilter';
import GenresFilter from './GenresFilter';
import Button from '@/components/Button';
import FilterSkeleton from '@/skeletons/FilterSkeleton';

function Filter() {
  const { data: languages } = useFetchLanguages();
  const { data: genres } = useFetchCategories();
  const router = useRouter();

  const methods = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: any) => {
    const resultFilter = Object.keys(data).filter((key) => data[key] === true);
    const languagesResultFilter = resultFilter.filter((lang) => languages.map((x: any) => x.keyword).includes(lang));
    const genresResultFilter = resultFilter.filter((genre) => genres.map((x: any) => x.keyword).includes(genre));

    if (languagesResultFilter.length !== 0 && genresResultFilter.length !== 0) {
      router.push({
        pathname: '/products',
        query: { lang: languagesResultFilter, genre: genresResultFilter },
      });
    } else if (languagesResultFilter.length !== 0 && genresResultFilter.length === 0) {
      router.push({
        pathname: '/products',
        query: { lang: languagesResultFilter },
      });
    } else if (languagesResultFilter.length === 0 && genresResultFilter.length !== 0) {
      router.push({
        pathname: '/products',
        query: { genre: genresResultFilter },
      });
    } else {
      router.push('/products');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {languages && genres ? (
          <>
            <h2 className="filter-title">{FILTER_TITLE}</h2>

            <div className="languages-filter">
              <LanguagesFilter
                languages={languages}
                languagesChecked={typeof router.query.lang === 'string' ? [router.query.lang] : router.query.lang}
              />
            </div>
            <div className="genres-filter">
              <GenresFilter
                genres={genres}
                genresChecked={typeof router.query.genre === 'string' ? [router.query.genre] : router.query.genre}
              />
            </div>

            <div className="apply">
              <Button
                htmlType="submit"
                className="apply-btn"
              >
                {APPLY_BUTTON}
              </Button>
            </div>
          </>
        ) : (
          <FilterSkeleton />
        )}
      </form>
    </FormProvider>
  );
}

function LeftMenu() {
  return (
    <div className="left-menu-section">
      <Filter />
    </div>
  );
}

export default LeftMenu;
