import { InputField } from '@/atoms';

export default {
  title: 'Atoms/common/Input Field',
  component: InputField
};

const Template = (args) => <InputField {...args} />;

export const inputField = Template.bind({});
inputField.args = {
  id: 'name',
  name: 'name',
  type: 'text',
  placeholder: 'Enter Your Name',
  disabled: false,
  autoFocus: false,
  required: false,
  register: () => {},
  errors: {},
  dbName: 'name'
};
