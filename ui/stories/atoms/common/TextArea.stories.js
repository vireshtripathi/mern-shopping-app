import { TextArea } from '@/atoms';

export default {
  title: 'Atoms/common/TextArea',
  component: TextArea
};

const Template = (args) => <TextArea {...args} />;

export const textArea = Template.bind({});

textArea.args = {
  id: 'name',
  label: 'name',
  placeholder: 'Enter Message',
  className: 'border border-grey-400 rounded-sm px-2 py-2',
  disabled: false,
  autoFocus: false,
  required: false
};
