import { useForm, FormProvider } from 'react-hook-form';
import InputNumber from '@/components/InputNumber';
import Button from '@/components/Button';

export default function InputNumberTest() {
  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputNumber name="quantity" />
            <div className="flex mt-3 justify-center">
              <Button htmlType="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputNumber
              name="count"
              disabled
            />
            <div className="flex mt-3 justify-center">
              <Button htmlType="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputNumber
              name="limit"
              minValue={0}
              maxValue={5}
            />
            <div className="flex mt-3 justify-center">
              <Button htmlType="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
