import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';
import { TextInfoProps } from './type';
import { numberWithCommas } from '@/layouts/ProductListPage/ProductCard/helper';
import { ARTHUR_TITLE, LANGUAGE_TITLE, GENRE_TITLE, QUANTITY_TITLE, BUY_BUTTON } from '../constants';
import Button from '@/components/Button';
import InputNumber from '@/components/InputNumber';

function RightInfo({ name, arthur, price, href, language, genres }: TextInfoProps) {
  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <div className="right-info-section">
      <h2 className="text-info-title">{name}</h2>
      <h4 className="text-info-arthur">
        {ARTHUR_TITLE + ':'} <span>{arthur}</span>
      </h4>
      <h4 className="text-info-language">
        {LANGUAGE_TITLE + ':'}{' '}
        <Link
          href={{ pathname: href, query: { lang: language.keyword } }}
          passHref
        >
          <Button
            type="link"
            className="text-info-language-link"
          >
            {language.name}
          </Button>
        </Link>
      </h4>
      <div className="text-info-price">{numberWithCommas(price) + ' ₫'}</div>

      <hr className="text-info-hr"></hr>
      <div className="text-info-genres">
        <span className="text-info-genres-title">{GENRE_TITLE}</span>
        {genres.map((genre, index) => (
          <Link
            key={index}
            href={{ pathname: href, query: { genre: genre.keyword } }}
            passHref
          >
            <Button
              type="link"
              className="text-info-genres-item"
            >
              {genre.name}
            </Button>
          </Link>
        ))}
      </div>

      <hr className="text-info-hr"></hr>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="text-info-quantity">
            <span className="text-info-quantity-title">{QUANTITY_TITLE}</span>
            <InputNumber
              name="quantity"
              maxValue={99}
              disabled
              className="text-info-quantity-input"
            />
          </div>
          <Button
            disabled
            className="buy-btn"
          >
            {BUY_BUTTON}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default RightInfo;
