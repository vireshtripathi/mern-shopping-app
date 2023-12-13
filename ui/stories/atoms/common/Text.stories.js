import { Text } from '@/atoms';

export default {
  component: Text,
  title: 'Atoms/common/Text',
  argsType: {
    variant: {
      control: 'select',
      options: ['body', 'bodySmall', 'caption']
    }
  }
};

const Template = (args) => (
  <Text
    register={() => {}}
    {...args}
  />
);

export const text = Template.bind({});

text.args = {
  content: `You will notice when dealing with non-primitive values, you will run into some limitations.
    The most obvious issue is that not every value can be represented as part of the args param in the URL,
    losing the ability to share and deeplink to such a state. Beyond that,
    complex values such as JSX cannot be synchronized between the manager (e.g. Controls addon) and the preview (your story).`,
  Class: 'text-blue-300',
  size: 'xl',
  weight: '500'
};
