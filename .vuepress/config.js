module.exports = {
    title: 'Blix',
    head: [
      ['link', { rel: 'icon', href: 'logo.png' }]
    ], 
    description: 'CLI tool to create, automate, and enhance JavaScript applications',
    themeConfig: {
        logo: 'logo.png',
        repo: 'blixjs/blix',
        repoLabel: 'Github',
        docsRepo: 'blixjs/blixjs.com',
        editLinks: true,
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on Github',
        activeHeaderLinks: false,
        sidebarDepth: 0,
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
              text: 'CLI',
              items: [
                { text: 'new', link: '/commands/new' },
                { text: 'add', link: '/commands/add' },
                { text: 'scripts', link: '/commands/scripts' },
                { text: 'generate', link: '/commands/generate' }
              ]
            },
            {
              text: 'API Reference',
              link: '/api/'
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
            '/api/': [
              ''
            ],
            '/about/': [
                '',
                'team',
                'roadmap',
                'contributing'
            ],
            '/commands/': [
                'new',
                'add',
                'scripts',
                'generate'
            ],
            '/': [
                '/guide/',
                '/guide/installation',
                {
                  title: 'Basics',
                  collapsable: false,
                  children: [
                    ['/guide/basics/project-configuration', 'Project Configurations'],
                    ['/guide/basics/scripts', 'Scripts'],
                    ['/guide/basics/deploying', 'Deploying']
                  ]
                },
                {
                  title: 'Walkthroughs',
                  collapsable: false,
                  children: [
                    ['/guide/examples/default-project', 'Create a default Project'],
                    ['/guide/examples/add-redux-and-react-router-to-create-react-app', 'Add Redux/React-Router to CRA']
                  ]
                },
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