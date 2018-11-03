module.exports = {
    title: 'Blix',
    description: 'Create, automate, and enhance Javascript applications',
    themeConfig: {
        repo: 'blixjs/blix',
        repoLabel: 'Github',
        docsRepo: 'blixjs/docs',
        editLinks: true,
        editLinkText: 'Edit this page on Github',
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'About',
                items: [
                  { text: 'Roadmap', link: '/about/roadmap' },
                  { text: 'About', link: '/about/' },
                  { text: 'Team', link: '/about/team' }
                ]
            }
        ],
        sidebar: {
            '/commands/': [
              '/new'   /* /bar/four.html */
            ],

            '/about/': [
                '',
                'team',
                'roadmap'
            ],
            '/': [
                '/guide/installation',
                '/guide/'       
              ],
        }
      },
      configureWebpack: {
        resolve: {
          alias: {
            '@assets': 'assets/'
          }
        }
      }
}