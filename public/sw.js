if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>i(e,n),f={module:{uri:n},exports:t,require:r};a[n]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TnKaZ_Y6a8QphG4I7egFu/_buildManifest.js",revision:"0a37122802fdbeb34853d73dafe2a2de"},{url:"/_next/static/TnKaZ_Y6a8QphG4I7egFu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/169-8b63e9ef5a24e124.js",revision:"8b63e9ef5a24e124"},{url:"/_next/static/chunks/36d2f571-25ebcea91295c996.js",revision:"25ebcea91295c996"},{url:"/_next/static/chunks/388-3abc91e14eb5f7ed.js",revision:"3abc91e14eb5f7ed"},{url:"/_next/static/chunks/3a17f596-9c7433439675685f.js",revision:"9c7433439675685f"},{url:"/_next/static/chunks/41155975-cb70f447dea8aad7.js",revision:"cb70f447dea8aad7"},{url:"/_next/static/chunks/561-213ea942b7897c92.js",revision:"213ea942b7897c92"},{url:"/_next/static/chunks/5727625e-bad574a937f6fae2.js",revision:"bad574a937f6fae2"},{url:"/_next/static/chunks/608-da62748565a3c263.js",revision:"da62748565a3c263"},{url:"/_next/static/chunks/69d2ed9c-196d48fad8caaf68.js",revision:"196d48fad8caaf68"},{url:"/_next/static/chunks/706-fc3c8dd110938d79.js",revision:"fc3c8dd110938d79"},{url:"/_next/static/chunks/85d7bc83-f85f7b48ca7be3ba.js",revision:"f85f7b48ca7be3ba"},{url:"/_next/static/chunks/cb355538-db3096297a255804.js",revision:"db3096297a255804"},{url:"/_next/static/chunks/e21e5bbe-4e89b2b48fd24cb5.js",revision:"4e89b2b48fd24cb5"},{url:"/_next/static/chunks/fea29d9f-cdce2ffdc89ce621.js",revision:"cdce2ffdc89ce621"},{url:"/_next/static/chunks/framework-68af0e14243e86ef.js",revision:"68af0e14243e86ef"},{url:"/_next/static/chunks/main-c8eeddf47025e6f3.js",revision:"c8eeddf47025e6f3"},{url:"/_next/static/chunks/pages/404-7397975b5c939d3d.js",revision:"7397975b5c939d3d"},{url:"/_next/static/chunks/pages/_app-a7e2d84213bc89e5.js",revision:"a7e2d84213bc89e5"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/about-5cc1ad4cfc7837e3.js",revision:"5cc1ad4cfc7837e3"},{url:"/_next/static/chunks/pages/blogs-88bf6cec86da62db.js",revision:"88bf6cec86da62db"},{url:"/_next/static/chunks/pages/blogs/renaming-git-remote-4667cf9cb448945b.js",revision:"4667cf9cb448945b"},{url:"/_next/static/chunks/pages/index-19adbe7a80f94b82.js",revision:"19adbe7a80f94b82"},{url:"/_next/static/chunks/pages/notebooks-1fa37dab80e11b95.js",revision:"1fa37dab80e11b95"},{url:"/_next/static/chunks/pages/notebooks/ai/bank-c414c1d00409d48c.js",revision:"c414c1d00409d48c"},{url:"/_next/static/chunks/pages/notebooks/ai/ollama-external-decbaaae53938c00.js",revision:"decbaaae53938c00"},{url:"/_next/static/chunks/pages/notebooks/misc/bank-b2217b8f43bb1b0a.js",revision:"b2217b8f43bb1b0a"},{url:"/_next/static/chunks/pages/notebooks/misc/divergent-branches-reconcile-6dab4f98158fd426.js",revision:"6dab4f98158fd426"},{url:"/_next/static/chunks/pages/notebooks/misc/gh-templates-7ce2253011c449fa.js",revision:"7ce2253011c449fa"},{url:"/_next/static/chunks/pages/notebooks/misc/renaming-git-remote-d5f0f9e90148c146.js",revision:"d5f0f9e90148c146"},{url:"/_next/static/chunks/pages/notebooks/mobile/bank-101512a9196881a2.js",revision:"101512a9196881a2"},{url:"/_next/static/chunks/pages/notebooks/web/bank-26dc4f5f0db27fba.js",revision:"26dc4f5f0db27fba"},{url:"/_next/static/chunks/pages/notebooks/web3/bank-937e091293891ecf.js",revision:"937e091293891ecf"},{url:"/_next/static/chunks/pages/showcase-39539e16920b4edf.js",revision:"39539e16920b4edf"},{url:"/_next/static/chunks/pages/showcase/bhel-48fee76e8952f6c3.js",revision:"48fee76e8952f6c3"},{url:"/_next/static/chunks/pages/showcase/gane-09f05b2fd641fe1c.js",revision:"09f05b2fd641fe1c"},{url:"/_next/static/chunks/pages/showcase/ghai-3ec94bb87d99ccb5.js",revision:"3ec94bb87d99ccb5"},{url:"/_next/static/chunks/pages/showcase/quillbook-e9a36e201f2160f6.js",revision:"e9a36e201f2160f6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/1d7c9f29c671b1c7.css",revision:"1d7c9f29c671b1c7"},{url:"/_next/static/css/832fecce6f2e12b4.css",revision:"832fecce6f2e12b4"},{url:"/_next/static/css/af68593e8615a8f1.css",revision:"af68593e8615a8f1"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/_next/static/media/bhel.81667c1b.png",revision:"fca6ff50d183795ab2cc7c95feb48e0b"},{url:"/_next/static/media/card-1.4f54665c.png",revision:"00868a0baebd11985603fe8636e0717f"},{url:"/_next/static/media/card-1.dark.efd5c446.png",revision:"4eb9f789bd0098a15b0bab8a87e80d89"},{url:"/_next/static/media/ff.e7aeabc9.png",revision:"af8cd48efe4828953d2556b9af2509ca"},{url:"/_next/static/media/full-black-bg-trans.b32cf599.png",revision:"c679925177b3ef2712c7b4e8b75fc82e"},{url:"/_next/static/media/full-white-bg-trans.ffdbd8f1.png",revision:"448ed73f6706b43ec6f17081fec69daa"},{url:"/_next/static/media/gane.d249642b.png",revision:"bf418213d9c82c935b52f7ac3c19d90e"},{url:"/_next/static/media/llama-on-disk.6f858965.png",revision:"11bbb86f08a6c7ccfac1e57c362e2b20"},{url:"/_next/static/media/merge.bf38063f.png",revision:"d565a410bbdd6475db10b3f4b21680d6"},{url:"/_next/static/media/octocat-programming.ba4330be.png",revision:"20ce8ba0f8c08e846a1f79039ab50150"},{url:"/_next/static/media/quillbook.b087ab92.png",revision:"1795ce1b9c78b32519c005c8030b9680"},{url:"/_next/static/media/rebase.8e088e87.png",revision:"f57653911672c9cf984b6896f7fd6135"},{url:"/_next/static/media/sign-black.2b4a2535.svg",revision:"8b5aebab63d0624fac073c2e144946df"},{url:"/_next/static/media/sign-white.5037ce80.svg",revision:"d9b10ba6850cfc229746c8695074481e"},{url:"/assets/blog-theme.png",revision:"ebec60c9d58ce3f31c64aa0446ecfb0b"},{url:"/assets/card-1.dark.png",revision:"4eb9f789bd0098a15b0bab8a87e80d89"},{url:"/assets/card-1.png",revision:"00868a0baebd11985603fe8636e0717f"},{url:"/assets/docs-theme.png",revision:"632e0ac47583ff49de7aadac16d2b431"},{url:"/assets/docs/banner.png",revision:"b487a148d912f518bc8a991005d40c97"},{url:"/assets/docs/custom-theme.png",revision:"51a0828e8ad2c139dff2c30e00d6c264"},{url:"/assets/docs/logo.png",revision:"8c576d302ed64d076fde3ec87a26cac4"},{url:"/assets/docs/menu.png",revision:"45970f55f51b280476a707b00472e5f1"},{url:"/assets/docs/navigation.png",revision:"6cdbea067e1d26f1538537f6fd53ad1b"},{url:"/assets/docs/project-link.png",revision:"07e777b97912fb2364cbef1ef34a82ac"},{url:"/assets/docs/sidebar-customized.png",revision:"56207115e2312ee59ce090ebdc76689d"},{url:"/assets/docs/sub-docs.mp4",revision:"b05ac980f7b024f8d76709a6f3f93103"},{url:"/assets/docs/title-suffix.png",revision:"4280710f177c3e2fedfdca2e7dba9e98"},{url:"/assets/gradient-bg.jpeg",revision:"c522a2888a3be798c1019a625aa122df"},{url:"/assets/high-contrast.png",revision:"36a0f8989fd307fd5737f348160ba7a9"},{url:"/assets/index_blog.png",revision:"ee80d861726cc7be874db7a9b4e2f6fb"},{url:"/assets/index_showcase.png",revision:"bb3be52cd06d4e348bd11c920e1c22d2"},{url:"/assets/nvimss.png",revision:"0676d4a2f98d15772795d6fe01b8c0bd"},{url:"/assets/routing.png",revision:"8e8f7984ae5dc0a593d025050db9a03b"},{url:"/assets/routing@1x.png",revision:"29ed39048ee3fca3c5fdae539cb56649"},{url:"/assets/search-dark.mp4",revision:"d69171e099f2b59058b1b98fca5b2b02"},{url:"/assets/search.mp4",revision:"89d84e9eac11f0743a35dda9dd08d906"},{url:"/assets/syntax-highlighting.svg",revision:"15b8b2a2af9587a93def6a0c3364ea22"},{url:"/atom.xml",revision:"7d8ddee85358740f704db3a93b8729b7"},{url:"/favicon.ico",revision:"c9d312dbd196f8a9557a730523da6b46"},{url:"/icon-192x192.png",revision:"bcb790ebf8874638ec94ceeb9a9a7d49"},{url:"/icon-256x256.png",revision:"b123ae2fa4679178a9d221d2514c0f89"},{url:"/icon-384x384.png",revision:"325e740a6810a0e920fdba2354b481d4"},{url:"/icon-512x512.png",revision:"2e4311854a99b813ff9e44f6f4738762"},{url:"/manifest.webmanifest",revision:"617a3f65c2e4fd816310e423d3c72841"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/notebooks/ai/llama-on-disk.png",revision:"11bbb86f08a6c7ccfac1e57c362e2b20"},{url:"/notebooks/ai/ollama-demo.png",revision:"546b5d4b187e65f95daeab6c8a3f8db5"},{url:"/notebooks/misc/git/ff.png",revision:"af8cd48efe4828953d2556b9af2509ca"},{url:"/notebooks/misc/git/merge.png",revision:"d565a410bbdd6475db10b3f4b21680d6"},{url:"/notebooks/misc/git/rebase-error-1.png",revision:"a3f8f1e1e4837eb6eefb129a0043ab13"},{url:"/notebooks/misc/git/rebase-error.png",revision:"3c4f85c16237c53f08c43a2522839b1c"},{url:"/notebooks/misc/git/rebase.png",revision:"f57653911672c9cf984b6896f7fd6135"},{url:"/notebooks/misc/octocat-programming.png",revision:"20ce8ba0f8c08e846a1f79039ab50150"},{url:"/og.jpeg",revision:"8c61adfdaf6356ca0b763d79ca7974d3"},{url:"/old-og.jpeg",revision:"bd0727c3ba6f5f36807fc29e9f60e1ec"},{url:"/people/gopalverma.png",revision:"61e9ecc334e417eb6b5fc2e2ac747ba5"},{url:"/personal/full-bg-black.png",revision:"a8913f5c32601987dc27246c4669d0c1"},{url:"/personal/full-bg-white.png",revision:"8d42990a3ea1c2750829af91de374f66"},{url:"/personal/full-black-bg-trans.png",revision:"c679925177b3ef2712c7b4e8b75fc82e"},{url:"/personal/full-white-bg-trans.png",revision:"448ed73f6706b43ec6f17081fec69daa"},{url:"/personal/half-bg-black.png",revision:"aa360e251f99d876b721e8e69e6ac12f"},{url:"/personal/half-bg-white.png",revision:"4c4a7affdc84bba347950c2ba8e50340"},{url:"/personal/main-bg-black.png",revision:"672600526f9290296f8419a20d9f95b9"},{url:"/personal/main-bg-white.png",revision:"f7273c803ff671976675a3d620c1538f"},{url:"/personal/main-black-bg-trans.png",revision:"4974ff489e78c2bdfe8ca234e66bc3fb"},{url:"/personal/main-white-bg-trans.png",revision:"bdc86d05ca9d8a7e657670c53f27baee"},{url:"/personal/minimain-bg-black.png",revision:"30c88c15fb161699c4316c6e85633d0f"},{url:"/personal/minimain-bg-white.png",revision:"f7bc220fd44b6afc36a527ecc0ba149e"},{url:"/personal/sign-black.svg",revision:"8b5aebab63d0624fac073c2e144946df"},{url:"/personal/sign-white.svg",revision:"d9b10ba6850cfc229746c8695074481e"},{url:"/robots.txt",revision:"0c22f03f2651fefe06048cdb2eb107f9"},{url:"/rss.json",revision:"1a85e49f8b4c598c1ac8bccd67f8dacd"},{url:"/rss.xml",revision:"9cb8eebfbc08acb99626d5df79483fe9"},{url:"/showcase/bcg.png",revision:"66635d732cd0429d09c8460493891aa4"},{url:"/showcase/bhel.png",revision:"fca6ff50d183795ab2cc7c95feb48e0b"},{url:"/showcase/cds.png",revision:"2536bd18de0d719ebf431ddfdcb3cd48"},{url:"/showcase/darkmap.png",revision:"ae026244ace7a50978204babdaf6bb09"},{url:"/showcase/dotfiles.png",revision:"353dcf47c754d6bd929bb8b9b4e6d25e"},{url:"/showcase/ec.png",revision:"7b2b8fddbb7a65399efc161f3d6dc0fa"},{url:"/showcase/gane.png",revision:"bf418213d9c82c935b52f7ac3c19d90e"},{url:"/showcase/ghai.png",revision:"4105bc441d096aaf6bf63904647b2f66"},{url:"/showcase/github-repo-tree.png",revision:"3bd426908d281dad7a52b38554554b20"},{url:"/showcase/kitchensinkrnr.png",revision:"3d87bd1892f0c9ca29dc571f754ddbfd"},{url:"/showcase/old-devsite.png",revision:"682d98475f6651b2917f551eb27d801f"},{url:"/showcase/pictrovert.png",revision:"809a5934314a402219c1d4966d6c826b"},{url:"/showcase/quillbook.png",revision:"1795ce1b9c78b32519c005c8030b9680"},{url:"/showcase/rc.png",revision:"121296e25e6d01c9242d37bb700dda03"},{url:"/showcase/rspp.png",revision:"1bb314b407547c1023c985568ea790fd"},{url:"/showcase/squadbook.png",revision:"04bb604c7b50ae8630b0cb714d69eefd"},{url:"/showcase/taptalk.png",revision:"5a6b3db6cb9213799c7f6102fe2b72b5"},{url:"/showcase/taptick.png",revision:"7d6eca7d3b8584d49fbba266153dd1eb"},{url:"/showcase/thirdfunding.png",revision:"a6202405dceb0c6f0ae29938ea1a1031"},{url:"/showcase/unite.png",revision:"240b46c32cc4921d9d6c3a3928dfadc5"},{url:"/showcase/voguegenie.png",revision:"3cdfaeedb2b7171c2ac8e9d04542163c"},{url:"/showcase/weatherapp.png",revision:"a08d85290ea5291807dc303a15600cb0"},{url:"/sitemap-0.xml",revision:"6bea335547e91339d7449f160e0265f0"},{url:"/sitemap.xml",revision:"2c6b547bf0b2934d127f4adf152af3f5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
