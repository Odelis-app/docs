import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Odelis',
  description: 'A space for thought.',
  base: '/docs/',
  cleanUrls: true,

  themeConfig: {
    siteTitle: 'Odelis',

    nav: [
      { text: 'Getting Started', link: '/get-started/' },
      { text: 'Using Odelis', link: '/guides/tasks' },
      { text: 'Development', link: '/development/contributing' }
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
      },
      {
        icon: 'youtube',
        link: 'https://youtube.com'
      }
    ],

    footer: {
      message: 'A space for thought.',
      copyright: 'Copyright © Odelis'
    }
  }
})
