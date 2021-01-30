export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6014e5a20d9f5189d9aa27b3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qxa98693',
                  apiId: 'c4524789-b2fc-4827-a8e0-ad1bca447d2d'
                },
                {
                  buildHookId: '6014e5a213fd1786c13ef2a5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3juz4fha',
                  apiId: 'f3a78c75-d5b1-4a8a-9ed8-f74baf6cd2c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PaulThompson/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3juz4fha.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
