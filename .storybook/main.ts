import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/components': path.resolve(__dirname, '../src/components/'),
        '@/constants': path.resolve(__dirname, '../src/constants/'),
        '@/hooks': path.resolve(__dirname, '../src/hooks/'),
        '@/helpers': path.resolve(__dirname, '../src/helpers/'),
        '@/lib': path.resolve(__dirname, '../src/lib/'),
        '@/styles': path.resolve(__dirname, '../src/styles/'),
        '@/types': path.resolve(__dirname, '../src/types/'),
        '@/app': path.resolve(__dirname, '../src/app/'),
      };
    }
    return config;
  },
  previewHead: (head) => `
  ${head}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;500;600;700;800&display=swap" rel="stylesheet">
      <style>
      :root {
        --inter-font: Inter, serif;
        --sen-font: Sen, sans-serif;
      }

      html, body {
        font-family: Sen, Inter, sans-serif;
      }
    </style>
`,
};
export default config;
