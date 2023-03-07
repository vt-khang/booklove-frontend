import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { object, string } from 'yup';
import {
  NAME_INPUT,
  EMAIL_INPUT,
  MESSAGE_INPUT,
  REQUIRED_EMAIL_ERROR,
  INVALID_EMAIL_ERROR,
  FEEDBACK_BUTTON,
} from '../constants';
import Input from '@/components/Input';
import Button from '@/components/Button';

const feedbackSubmitFormSchema = object().shape({
  name: string(),
  email: string().required(REQUIRED_EMAIL_ERROR).email(INVALID_EMAIL_ERROR),
  message: string(),
});

function RightContact() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(feedbackSubmitFormSchema),
  });
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mt-[40px]">
            <Input
              name="name"
              placeholder={NAME_INPUT}
              className="contact-input"
              allowClear
            />
            <Input
              name="email"
              placeholder={EMAIL_INPUT}
              className="contact-input contact-input-error"
              errorClass="contact-error"
              allowClear
            />
            <Input
              name="message"
              type="textarea"
              autoSize={false}
              placeholder={MESSAGE_INPUT}
              className="contact-input"
            />
          </div>

          <div className="feedback">
            <Button
              htmlType="submit"
              className="feedback-btn"
            >
              {FEEDBACK_BUTTON}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default RightContact;
