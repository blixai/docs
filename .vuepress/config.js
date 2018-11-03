module.exports = {
    title: 'Blix',
    head: [
      ['link', { rel: 'icon', href: 'logo.png' }]
    ], 
    description: 'Create, automate, and enhance Javascript applications',
    themeConfig: {
        logo: 'logo.png',
        repo: 'blixjs/blix',
        repoLabel: 'Github',
        docsRepo: 'blixjs/blixjs.com',
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
                  { text: 'About', link: '/about/index' },
                  { text: 'Team', link: '/about/team' },
                  { text: 'Contributing', link: '/about/contributing' }
                ]
            }
        ],
        sidebar: {
            '/about/': [
                '',
                'team',
                'roadmap',
                'contributing'
            ],
            '/': [
                '/guide/installation',
                '/guide/',
                {
                  title: 'Quick Start Examples',
                  collapsable: false,
                  children: [
                    ['/guide/examples/default-project', 'Create a default Project'],
                    ['/guide/examples/add-redux-and-react-router-to-create-react-app', 'Add Redux/React-Router to CRA']
                  ]
                },
                {
                  title: 'Commands',
                  collapsable: false,
                  children: [
                    '/guide/commands/new',
                    '/guide/commands/add',
                    '/guide/commands/scripts',
                    '/guide/commands/generate',
                    '/guide/commands/help'
                  ]
                }, 
                '/guide/deploying'
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