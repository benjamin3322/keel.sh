module.exports = {
  title: 'Keel',
  description: 'Kubernetes Operator to automate Helm, DaemonSet, StatefulSet & Deployment updates',
  themeConfig: {
    logo: '/img/logo_small.png',
    repo: 'keel-hq/keel',
    docsRepo: 'keel-hq/keel.sh',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/' },
      { text: 'Examples', link: '/examples/' },     
      {
        text: 'External',
        items: [
          { text: 'Webhooks & Tunneling', link: 'https://webhookrelay.com' }
        ]
      }     
    ]
  },
  dest: "dist",
  plugins: [
    '@vuepress/medium-zoom',
    // '@vuepress/pwa',
    [
    '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          }
    ],
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-103394074-1'
      }
    ]  
  ] 
}

