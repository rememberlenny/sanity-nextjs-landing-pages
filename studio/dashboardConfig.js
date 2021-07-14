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
                  buildHookId: '60ef492dbfd80016f1fc922b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ik7jqdsc',
                  apiId: '01961fae-f5d4-4a3f-9c93-1a860212b334'
                },
                {
                  buildHookId: '60ef492dac640b13c6c8988e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cax6qhar',
                  apiId: '42dbacb8-9060-4c1d-9057-2a5bf332e8ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rememberlenny/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cax6qhar.netlify.app', category: 'apps'}
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
