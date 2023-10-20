const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FAIR Biomedical Research Software Guidelines',
  // eslint-disable-next-line max-len
  tagline:
    // eslint-disable-next-line max-len
    'The first minimal and actionable step-by-step guidelines for biomedical researchers to make their research software compliant with the FAIR4RS principles.',
  url: 'https://docs.fair-biors.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FAIR-BioRS',
  projectName: 'FAIR-BioRS Docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/FAIR-BioRS/Docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: `Upcoming 🚧`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/FAIR-BioRS/Docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-umami'],
  themes: ['docusaurus-theme-frontmatter'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FAIR Biomedical Research Software ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guidelines',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/FAIR-BioRS/Docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://fairdataihub.org/contact-us',
            label: 'Contact Us',
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
                label: 'Changelog',
                to: '/docs/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              {
                label: 'Homepage',
                href: 'https://fairdataihub.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fairdataihub',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/FAIR-BioRS/Docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fair Data Innovations Hub.`,
      },
      colorMode: {
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'announcement-bar',
        // eslint-disable-next-line max-len
        content: `⭐️ <strong> We would love your support. Give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/FAIR-BioRS/Guidelines">Github</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/fairdataihub">Twitter</a>. </strong>`,
        backgroundColor: '#fff3f8',
        textColor: '#0f172a',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'FAIR BioRS, fairhub, fairdataihub, research, data, open science, open data',
        },
        {
          name: 'description',
          // eslint-disable-next-line max-len
          content: `FAIR BioRS is the first minimal and actionable step-by-step guidelines for biomedical researchers to make their research software compliant with the FAIR4RS principles.`,
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'author',
          content: 'Fair Data Innovations Hub',
        },
      ],
      // algolia: {
      //   appId: '5C68KRW2LG',
      //   apiKey: 'f54157cf9bcb7564a29aa0995e0eb192',
      //   indexName: 'docs-sodaforsparc',
      //   contextualSearch: true,
      // },
      umami: {
        websiteid: 'f8a70e40-8a45-4c6e-9753-e499c234a605',
        src: 'https://umami.fairdataihub.org/mushroom',
      },
    }),

  scripts: [
    {
      src: 'scripts/uploadcare.js',
      defer: true,
    },
  ],
};

module.exports = config;
