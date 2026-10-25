import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Odelis',
  description: 'A space for thought.',
  base: '/docs/',
  cleanUrls: true,

  themeConfig: {
    siteTitle: 'Odelis',

    nav: [
      { text: 'Guide', link: '/get-started/' },
      { text: 'Development', link: '/development/architecture' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/get-started/' }
        ]
      },
      {
        text: 'Using Odelis',
        items: [
          { text: 'Tasks', link: '/guides/tasks' },
          { text: 'Notes & Library', link: '/guides/notes-library' },
          { text: 'Weekly Planner', link: '/guides/weekly-planner' }
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Architecture', link: '/development/architecture' },
          { text: 'Contributing', link: '/development/contributing' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Odelis-app/odelis'
      }
    ],

    footer: {
      message: 'A space for thought.',
      copyright: 'Copyright © Odelis'
    }
  }
})
