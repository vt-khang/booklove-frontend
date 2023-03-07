import { useForm, FormProvider } from 'react-hook-form';
import Checkbox from '@/components/Checkbox';
import CheckboxGroup from '@/components/CheckboxGroup';
import Button from '@/components/Button';

export default function CheckboxTest() {
  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CheckboxGroup
              name="all"
              label="All"
            >
              <Checkbox name="1">First</Checkbox>
              <Checkbox name="2">Second</Checkbox>
              <Checkbox name="3">Third</Checkbox>
              <Checkbox name="4">Fourth</Checkbox>
            </CheckboxGroup>
            <div className="flex mt-3 justify-center">
              <Button htmlType="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CheckboxGroup
              name="all"
              label="All"
            >
              <Checkbox
                name="first"
                disabled
              >
                First
              </Checkbox>
              <Checkbox name="second">Second</Checkbox>
              <Checkbox name="third">Third</Checkbox>
              <Checkbox
                name="fourth"
                disabled
              >
                Fourth
              </Checkbox>
            </CheckboxGroup>
          </form>
        </FormProvider>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CheckboxGroup
              name="all"
              label="All"
              disabled
            >
              <Checkbox name="first">First</Checkbox>
              <Checkbox name="second">Second</Checkbox>
              <Checkbox name="third">Third</Checkbox>
              <Checkbox name="fourth">Fourth</Checkbox>
            </CheckboxGroup>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
