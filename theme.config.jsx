import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'


export default {
    head() {
      const { asPath, defaultLocale, locale } = useRouter()
      const { frontMatter } = useConfig()
      const url =
        'https://my-app.com' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
  
      return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'Nextra'} />
          <meta
            property="og:description"
            content={frontMatter.description || 'The next site builder'}
          />
          <meta property="og:image" content={`https://starblast.io/static/img/icon64.png`} />
        </>
      )
    },
    banner: {
      key: 'sesapi-release',
      content: (
        <a href="https://w0lfan.github.io/SesAPI/" target="_blank">
          🎉 SesAPI is released. Try it out!
        </a>
      )
    },  
    logo: <img src="https://starblast.io/static/img/icon64.png" alt="Logo" width="32" height="32"/>,
    project: {
      link: 'https://github.com/pmgl/starblast-modding'
    },
    chat: {
      link: 'https://discord.gg/85qN8F2gJf'
    },
    docsRepositoryBase: 'https://github.com/rithyn/demo2',
    footer: "",
    // ... other theme options
  }