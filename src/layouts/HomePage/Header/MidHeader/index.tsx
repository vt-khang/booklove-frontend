import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import { SearchBarProps } from './type';
import { SEARCH_PLACEHOLDER } from '../constants';
import { encodeKeywordString } from '../helper';
import Input from '@/components/Input';

function MidHeader() {
  const methods = useForm({
    mode: 'onChange',
  });
  const router = useRouter();

  const onSubmit = (data: SearchBarProps) => {
    let keyword = data.keyword || '';
    router.push({
      pathname: '/products',
      query: { q: encodeKeywordString(keyword) },
    });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input
            type="search"
            name="keyword"
            placeholder={SEARCH_PLACEHOLDER}
            className="search-bar"
            allowClear
          />
        </form>
      </FormProvider>
    </>
  );
}

export default MidHeader;
