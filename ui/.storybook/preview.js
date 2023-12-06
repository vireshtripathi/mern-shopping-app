/** @type { import('@storybook/react').Preview } */
import "../styles/global.css";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["templates", "organisms", "molecules", "atoms", "samples"],
      },
    },
    docs: { previewSource: "open" },
    layout: "fullscreen",
  },
};

export default preview;
