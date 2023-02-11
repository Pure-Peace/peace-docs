// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const EDIT_URL = 'https://github.com/pure-peace/peace-docs/edit/main/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PEACE',
  tagline: 'The osu! server development framework',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://peace.osu.icu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pure-peace', // Usually your GitHub org/user name.
  projectName: 'peace-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],

  stylesheets: ['fonts/fonts.css'],

  plugins: [
    () => ({
      name: 'postcss-tailwindcss-loader',
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require('tailwindcss'));
        return postcssOptions;
      },
    }),
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
      },
    },
  },
  themes: [
    [
      // @ts-ignore
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        indexPages: true,
        hashed: true,
        language: ['en', 'zh'],
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: EDIT_URL,
        },
        blog: {
          showReadingTime: true,
          editUrl: EDIT_URL,
        },
        theme: {
          customCss: [require.resolve('./src/styles/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/peacev1.gif',
      navbar: {
        title: 'PEACE',
        logo: {
          alt: 'PEACE',
          src: 'img/logo.svg',
          srcDark: '/img/logo-dark.svg',
        },
        items: [
          { to: '/docs', label: 'Docs' },
          { to: '/blog', label: 'Blog' },
          { type: 'docsVersionDropdown', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} PEACE Project.`,
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Guide',
            items: [],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6YKQMPpMrz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pure-peace/peace',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'rust',
          'toml',
          'bash',
          'sql',
          'json',
          'yaml',
          'nginx',
        ],
      },
    }),
};

module.exports = config;
