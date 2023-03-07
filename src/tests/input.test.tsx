import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function InputTest() {
  const validationSchema = yup.object().shape({
    name: yup.string().min(6),
    email: yup.string().email().required(),
    password: yup.string().min(4),
    phone: yup.string().min(1).max(10),
    signature: yup.string().required(),
  });

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex mt-3">
              <Input
                name="name"
                label="Username"
                labelClass="mt-[10px]"
                placeholder="Enter your name"
                allowClear
              />
            </div>
            <div className="flex mt-3">
              <Input
                name="disabled"
                label="Disable"
                labelClass="mt-[10px]"
                placeholder="Enter your name"
                disabled
              />
            </div>
            <div className="flex mt-3">
              <Input
                name="email"
                label="Email"
                labelClass="mt-[10px]"
                placeholder="Enter your mail"
                required
              />
            </div>
            <div className="flex mt-3">
              <Input
                type="password"
                name="password"
                label="Password"
                labelClass="mt-[10px]"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex mt-3">
              <Input
                type="number"
                name="phone"
                label="Phone"
                labelClass="mt-[10px]"
                placeholder="Enter your phone"
              />
            </div>
            <div className="flex mt-3">
              <Input
                type="search"
                name="search"
                label="Search"
                labelClass="mt-[10px]"
                placeholder="Enter your keywords"
              />
            </div>
            <div className="flex mt-3">
              <Input
                type="textarea"
                name="signature"
                label="Signature"
                labelClass="mt-[10px]"
                placeholder="Enter your signature"
                allowClear
                autoSize={false}
                showCount
                maxLength={50}
              />
            </div>
            <div className="flex mt-3 justify-center">
              <Button htmlType="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
