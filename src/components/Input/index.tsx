import { InputProps } from './type';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputSearch from './InputSearch';
import InputPassword from './InputPassword';
import InputTextarea from './InputTextarea';

function Input({ type = 'input', ...props }: InputProps) {
  return (
    <>
      {type === 'input' && <InputText {...props} />}
      {type === 'number' && <InputNumber {...props} />}
      {type === 'search' && <InputSearch {...props} />}
      {type === 'password' && <InputPassword {...props} />}
      {type === 'textarea' && <InputTextarea {...props} />}
    </>
  );
}

export default Input;
