const ICON_TYPE = {
  GITHUB: "GITHUB",
  CHROME: "CHROME",
  FIREFOX: "FIREFOX",
  EDGE: "EDGE",
  NPM: "NPM",
  WEBSITE: "WEBSITE",
  PLAY_STORE: "PLAY_STORE",
};

const iconsName = {
  [ICON_TYPE.GITHUB]: "Github",
  [ICON_TYPE.CHROME]: "Chrome",
  [ICON_TYPE.FIREFOX]: "Firefox",
  [ICON_TYPE.EDGE]: "Edge",
  [ICON_TYPE.NPM]: "NPM",
  [ICON_TYPE.WEBSITE]: "Website",
  [ICON_TYPE.PLAY_STORE]: "Play Store",
};

const icons = {
  [ICON_TYPE.GITHUB]: `
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        class="github"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        />
    </svg>
  `,
  [ICON_TYPE.CHROME]: `
      <svg
        class="chrome"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        width="1em"
        height="1em"
      >
          <path
            fill="currentColor"
            d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"
            class=""
          />
      </svg>
    `,
  [ICON_TYPE.FIREFOX]: `
      <svg
        class="firefox-browser"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="M189.37,152.86Zm-58.74-29.37C130.79,123.5,130.71,123.5,130.63,123.49Zm351.42,45.35c-10.61-25.5-32.08-53-48.94-61.73,13.72,26.89,21.67,53.88,24.7,74,0,0,0,.14.05.41-27.58-68.75-74.35-96.47-112.55-156.83-1.93-3.05-3.86-6.11-5.74-9.33-1-1.65-1.86-3.34-2.69-5.05A44.88,44.88,0,0,1,333.24.69a.63.63,0,0,0-.55-.66.9.9,0,0,0-.46,0l-.12.07-.18.1.1-.14c-54.23,31.77-76.72,87.38-82.5,122.78a130,130,0,0,0-48.33,12.33,6.25,6.25,0,0,0-3.09,7.75,6.13,6.13,0,0,0,7.79,3.79l.52-.21a117.84,117.84,0,0,1,42.11-11l1.42-.1c2-.12,4-.2,6-.22A122.61,122.61,0,0,1,291,140c.67.2,1.32.42,2,.63,1.89.57,3.76,1.2,5.62,1.87,1.36.5,2.71,1,4.05,1.58,1.09.44,2.18.88,3.25,1.35q2.52,1.13,5,2.35c.75.37,1.5.74,2.25,1.13q2.4,1.26,4.74,2.63,1.51.87,3,1.8a124.89,124.89,0,0,1,42.66,44.13c-13-9.15-36.35-18.19-58.82-14.28,87.74,43.86,64.18,194.9-57.39,189.2a108.43,108.43,0,0,1-31.74-6.12c-2.42-.91-4.8-1.89-7.16-2.93-1.38-.63-2.76-1.27-4.12-2C174.5,346,149.9,316.92,146.83,281.59c0,0,11.25-41.95,80.62-41.95,7.5,0,28.93-20.92,29.33-27-.09-2-42.54-18.87-59.09-35.18-8.85-8.71-13.05-12.91-16.77-16.06a69.58,69.58,0,0,0-6.31-4.77A113.05,113.05,0,0,1,173.92,97c-25.06,11.41-44.55,29.45-58.71,45.37h-.12c-9.67-12.25-9-52.65-8.43-61.08-.12-.53-7.22,3.68-8.15,4.31a178.54,178.54,0,0,0-23.84,20.43A214,214,0,0,0,51.9,133.36l0,0a.08.08,0,0,1,0,0,205.84,205.84,0,0,0-32.73,73.9c-.06.27-2.33,10.21-4,22.48q-.42,2.87-.78,5.74c-.57,3.69-1,7.71-1.44,14,0,.24,0,.48-.05.72-.18,2.71-.34,5.41-.49,8.12,0,.41,0,.82,0,1.24,0,134.7,109.21,243.89,243.92,243.89,120.64,0,220.82-87.58,240.43-202.62.41-3.12.74-6.26,1.11-9.41,4.85-41.83-.54-85.79-15.82-122.55Z"
          class=""
        />
      </svg>
    `,
  [ICON_TYPE.EDGE]: `
      <svg
        class="edge"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="M481.92,134.48C440.87,54.18,352.26,8,255.91,8,137.05,8,37.51,91.68,13.47,203.66c26-46.49,86.22-79.14,149.46-79.14,79.27,0,121.09,48.93,122.25,50.18,22,23.8,33,50.39,33,83.1,0,10.4-5.31,25.82-15.11,38.57-1.57,2-6.39,4.84-6.39,11,0,5.06,3.29,9.92,9.14,14,27.86,19.37,80.37,16.81,80.51,16.81A115.39,115.39,0,0,0,444.94,322a118.92,118.92,0,0,0,58.95-102.44C504.39,176.13,488.39,147.26,481.92,134.48ZM212.77,475.67a154.88,154.88,0,0,1-46.64-45c-32.94-47.42-34.24-95.6-20.1-136A155.5,155.5,0,0,1,203,215.75c59-45.2,94.84-5.65,99.06-1a80,80,0,0,0-4.89-10.14c-9.24-15.93-24-36.41-56.56-53.51-33.72-17.69-70.59-18.59-77.64-18.59-38.71,0-77.9,13-107.53,35.69C35.68,183.3,12.77,208.72,8.6,243c-1.08,12.31-2.75,62.8,23,118.27a248,248,0,0,0,248.3,141.61C241.78,496.26,214.05,476.24,212.77,475.67Zm250.72-98.33a7.76,7.76,0,0,0-7.92-.23,181.66,181.66,0,0,1-20.41,9.12,197.54,197.54,0,0,1-69.55,12.52c-91.67,0-171.52-63.06-171.52-144A61.12,61.12,0,0,1,200.61,228,168.72,168.72,0,0,0,161.85,278c-14.92,29.37-33,88.13,13.33,151.66,6.51,8.91,23,30,56,47.67,23.57,12.65,49,19.61,71.7,19.61,35.14,0,115.43-33.44,163-108.87A7.75,7.75,0,0,0,463.49,377.34Z"
        />
      </svg>
    `,
  [ICON_TYPE.NPM]: `
      <svg
        class="npm"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
        />
      </svg>
    `,
  [ICON_TYPE.WEBSITE]: `
        <svg
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
        >
            <path
                fill="currentColor"
                d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z"
            />
        </svg>
    `,
  [ICON_TYPE.PLAY_STORE]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path fill="currentColor" d="M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1zm8.292 11.68l-4.498 4.498 5.699-3.299-1.2-1.2zM5 6.118v11.76l5.88-5.88-5.88-5.88zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336l4.5 4.5 1.199-1.2-5.699-3.3z"/>
    </svg>
  `,
};

const projects = [
  {
    name: "Fire Dashboard",
    description: `
      New Tab Dashboard and Bookmark Manager. Fire dashboard is your all-in-one productivity tool with multiple workspace support.
    `,
    badges: [
      {
        link: "https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/chrome-web-store/users/ljpgbnpckoolgelpcbpfcafklbpkodeg?label=chrome%20downloads&style=flat-square",
      },
    ],
    screenshots: [
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/bookmark-raw.jpeg?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/new-tab-bh-raw.jpeg?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/workspace-raw.jpeg?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/search-raw.jpeg?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/theme-support-raw.jpeg?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/unsplash-raw.jpeg?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/firebase-raw.jpeg?raw=true",
      }
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/fire-dashboard",
      },
      {
        type: ICON_TYPE.CHROME,
        url: "https://chrome.google.com/webstore/detail/fire-dashboard/ljpgbnpckoolgelpcbpfcafklbpkodeg",
      },
    ],
  },
  {
    name: "React Context Devtool",
    description: `
            Devtool for debug ReactJS Context and useReducer API. Devtool have raw, tree and diff views of your JSON data.
            It allow you can dispatch actions from devtool in useReducer hook.
        `,
    badges: [
      {
        link: "https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/npm/dt/react-context-devtool.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/npm/v/react-context-devtool.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/chrome-web-store/users/oddhnidmicpefilikhgeagedibnefkcf?label=chrome%20downloads&style=flat-square",
      },
    ],
    screenshots: [
      {
        link: "https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/context-tree-view.png",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/context-raw-view.png",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/reducer-action-view.png",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/reducer-diff-view.png",
      },
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/react-context-devtool",
      },
      {
        type: ICON_TYPE.CHROME,
        url: "https://chrome.google.com/webstore/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf",
      },
      {
        type: ICON_TYPE.FIREFOX,
        url: "https://addons.mozilla.org/en-US/firefox/addon/react-context-devtool/",
      },
      {
        type: ICON_TYPE.EDGE,
        url: "https://microsoftedge.microsoft.com/addons/detail/react-context-devtool/bnclaomncapgohhafjepfklgbjdjlfcd",
      },
      {
        type: ICON_TYPE.NPM,
        url: "https://www.npmjs.com/package/react-context-devtool",
      },
    ],
  },
  {
    name: "Webpack Report",
    description: `
            Webpack build analysis tool. it gives a detailed report for assets, modules and chunks so you can easily optimize your webpack build.
        `,
    badges: [
      {
        link: "https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/npm/dt/webpack-report.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/npm/v/react-context-devtool.svg?style=flat-square",
      },
    ],
    screenshots: [
      {
        link: "https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/dashboard.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/assets.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/modules.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/chunks.png?raw=true",
      },
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/webpack-report",
      },
      {
        type: ICON_TYPE.NPM,
        url: "https://www.npmjs.com/package/webpack-report",
      },
    ],
  },
  {
    name: "EditMyMd",
    description: `
          Easily manage your GitHub and GitLab project documentation. With EditMyMD you can manage your all markdown files.
      `,
    screenshots: [
      {
        link: "https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-1.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-2.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-3.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-4.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-5.png?raw=true",
      },
      {
        link: "https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-6.png?raw=true",
      },
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/editmymd",
      },
      {
        type: ICON_TYPE.WEBSITE,
        url: "https://editmymd.herokuapp.com/",
      },
    ],
  },
  {
    name: "Tools",
    description: `
        Devtools collections for developers to do their daily tasks.
      `,
    screenshots: [
      {
        link: "https://raw.githubusercontent.com/deeppatel234/tools/master/assests/screenshots/Tools-1.jpeg",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/tools/master/assests/screenshots/Tools-2.jpeg",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/tools/master/assests/screenshots/Tools-3.jpeg",
      },
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/tools",
      },
      {
        type: ICON_TYPE.WEBSITE,
        url: "https://deeppatel234.github.io/tools",
      },
    ],
  },
  {
    name: "MD Editor React",
    description: `
            Markdown Editor for ReactJS. create a markdown with live preview and customized menu bar.
        `,
    badges: [
      {
        link: "https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/npm/dt/md-editor-react.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/npm/v/md-editor-react.svg?style=flat-square",
      },
      {
        link: "https://img.shields.io/bundlephobia/min/md-editor-react?style=flat-square",
      },
      {
        link: "https://img.shields.io/bundlephobia/minzip/md-editor-react?style=flat-square",
      },
    ],
    screenshots: [
      {
        link: "https://raw.githubusercontent.com/deeppatel234/md-editor-react/master/assets/screenshots/MD-Editor-1.png",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/md-editor-react/master/assets/screenshots/MD-Editor-2.png",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/md-editor-react/master/assets/screenshots/MD-Editor-3.png",
      },
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/md-editor-react",
      },
      {
        type: ICON_TYPE.NPM,
        url: "https://www.npmjs.com/package/md-editor-react",
      },
    ],
  },
  {
    name: "Expensy",
    description: `
      Personal Expense Tracking app made with react native.
    `,
    screenshots: [
      {
        link: "https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-1.webp",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-2.webp",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-3.webp",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-4.webp",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-5.webp",
      },
      {
        link: "https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-6.webp",
      },
    ],
    links: [
      {
        type: ICON_TYPE.GITHUB,
        url: "https://github.com/deeppatel234/expensy-app",
      },
      {
        type: ICON_TYPE.PLAY_STORE,
        url: "https://play.google.com/store/apps/details?id=com.devivetech.expensy&hl=en_IN&gl=US",
      },
    ],
  },
];

const work = `
    <div id="work-page">
        ${projects
          .map(({ name, description, screenshots, links, badges = [] }) => {
            return `
                    <div class="project-card">
                        <div class="first-col">
                            <h1 class="title">
                                ${name}
                            </h1>
                            <p class="badges">
                              ${badges
                                .map(({ link }) => {
                                  return `
                                    <img src="${link}" />
                                `;
                                })
                                .join("")}
                            </p>
                            <p class="sub-text discription">
                                ${description}
                            </p>
                            <div class="image-slide">
                                ${screenshots
                                  .map(({ link }) => {
                                    return `
                                        <img class="screenshot img-shadow" src="${link}" />
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                        <div class="secound-col">
                          ${links
                            .map(({ url, type }) => {
                              return `
                                <a target="_blank" href="${url}">
                                  <div>
                                    ${icons[type]}
                                  </div>
                                  <div>
                                    ${iconsName[type]}
                                  </div>
                                </a>
                              `;
                            })
                            .join("")}
                        </div>
                    </div>
                `;
          })
          .join("")}
    </div>
`;

export default work;
