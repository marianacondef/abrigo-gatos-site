// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Abrigo de Gatos',
  tagline: 'Adote um amigo peludo',
  favicon: 'img/favicon.ico',

  url: 'https://github.com',
  baseUrl: '/abrigo-gatos-site/',

  // GitHub pages deployment config.
  organizationName: 'marianacondef',
  projectName: 'abrigo-gatos-site',
  deploymentBranch: 'gh-pages', 
  trailingSlash: false,

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Abrigo de Gatos',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
       items: [
        { to: '/', label: 'Início', position: 'left' },
        { to: '/adocao', label: 'Adoção', position: 'left' },
        { to: '/apadrinhamento', label: 'Apadrinhamento', position: 'left' },
        { to: '/voluntariado', label: 'Voluntariado', position: 'left' },
        { to: '/doacoes', label: 'Doações', position: 'left' },
        {
          href: 'https://github.com/marianacondef/abrigo-gatos-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
      },
      stylesheets: [
      {
        href: '/css/custom.css',
        type: 'text/css',
      },
    ],
    presets: [
      [
        'classic',
        {
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/cabanameianoite/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/p/Gatos-e-gatinhos-da-Cabana-da-Meia-Noite-100075701787945/?locale=pt_PT',
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                label: 'Nosso Email',
                href: 'mailto: cabanameianoite@gmail.com',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/marianacondef/abrigo-gatos-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abrigo de Gatos. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
