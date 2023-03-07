import { useForm, FormProvider } from 'react-hook-form';
import Radio from '@/components/Radio';
import RadioGroup from '@/components/RadioGroup';
import Button from '@/components/Button';

export default function RadioTest() {
  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RadioGroup>
              <Radio name="first">First</Radio>
              <Radio name="second">Second</Radio>
              <Radio name="third">Third</Radio>
              <Radio name="fourth">Fourth</Radio>
            </RadioGroup>
            <div className="flex mt-3 justify-center">
              <Button htmlType="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RadioGroup>
              <Radio
                name="first"
                disabled
              >
                First
              </Radio>
              <Radio name="second">Second</Radio>
              <Radio name="third">Third</Radio>
              <Radio
                name="fourth"
                disabled
              >
                Fourth
              </Radio>
            </RadioGroup>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
