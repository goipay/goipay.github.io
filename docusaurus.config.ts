import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GoiPay',
  tagline: 'A lightweight crypto payment processor',
  favicon: 'img/goipay-logo.svg',

  // Set the production url of your site here
  url: 'https://goipay.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chekist32', // Usually your GitHub org/user name.
  projectName: 'goipay.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/goipay/goipay.github.io/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/goipay-social-card.jpg',
    navbar: {
      title: 'GoiPay',
      logo: {
        alt: 'GoiPay Logo',
        src: 'img/goipay-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiReferenceSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/goipay/goipay',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search', // Add this line to include the search bar
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/introduction',
            },
            {
              label: 'API Reference',
              to: '/docs/api/grpc',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Simplex',
              href: 'https://simplex.chat/contact/#/?v=2-7&smp=smp%3A%2F%2F1OwYGt-yqOfe2IyVHhxz3ohqo3aCCMjtB-8wn4X_aoY%3D%40smp11.simplex.im%2F1L8F_GphTEb06vQByhjLfvwaefkpExAP%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAS8syjkFUpgVZN0q86dR4CTaU9wnhdBTU6HZVPOm5his%253D%26srv%3D6ioorbm6i3yxmuoezrhjk6f6qgkc4syabh7m3so74xunb5nzr4pwgfqd.onion&data=%7B%22type%22%3A%22group%22%2C%22groupLinkId%22%3A%22dJV5kv2bIyF2rGKa1Ey65w%3D%3D%22%7D',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/goipay/goipay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Goipay. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ini', 'bash']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
