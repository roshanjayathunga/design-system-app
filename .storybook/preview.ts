import type { Preview } from "@storybook/react";
import "../src/index.css"; // Adjust path if your Tailwind CSS entry is elsewhere

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
