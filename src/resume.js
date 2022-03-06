const data = {
  name: "Deep Patel",
  designation: "Frontend Engineer",
  contactDetails: [
    {
      title: "Mobile",
      value: "+91 9624184236",
    },
    {
      title: "Email",
      value: "deeppatel234@gmail.com",
    },
    {
      title: "Address",
      value: "Pune, Maharashtra, India",
    },
  ],
  socialDetails: [
    {
      icon: "ri-github-fill",
      link: "https://github.com/deeppatel234",
      title: "deeppatel234",
    },
    {
      icon: "ri-linkedin-box-fill",
      link: "https://www.linkedin.com/in/deeppatel234/",
      title: "/in/deeppatel234",
    },
    {
      icon: "ri-earth-line",
      link: "https://deeppatel234.github.io",
      title: "deeppatel234.github.io",
    },
  ],
  profileBlock: {
    title: "Profile",
    description: `
      Being front-end developer and open source enthusiast, I'm seeking full time
      opportunity in the organization. I'm confident enough to prove
      myself worth to the company by applying my knowledge and skills
      for continues improvement. I can also work in agile environment
      and be a team player.
    `,
  },
  educationBlock: {
    blockTitle: "Education",
    title: "BE in Computer Engineering",
    subTitle: "2013-2017 (8.68 CGPA)",
    description: "Gujarat power engineering and research institute",
  },
  experienceBlock: {
    blockTitle: "Experience",
    list: [
      {
        title: "Software Design Engineer, Onlinesales.ai",
        titleRight: "2/2020 - Present",
        tags: ["React JS", "Redux", "Lerna.js"],
        description: [
          "Lead Hyperlocal product. manage the sprint task and the team.",
          "Develop a design system from scratch for all the onlinesales products.",
          "Architect and refactor all the products from scratch in React JS.",
        ],
      },
      {
        title: "Software Design Engineer, Agrostar",
        titleRight: "2/2019 - 2/2020",
        tags: ["React JS", "Redux", "Lerna.js"],
        description: [
          "Develop a design system from scratch for all the agrostar products.",
          "Own AgroEx product and manage the sprint task.",
          "Refactor 2 product AgroEx and Credit viswas from scratch in React JS.",
        ],
      },
      {
        title: "Jr. Application Engineer, Odoo",
        titleRight: "7/2017 - 2/2019",
        tags: ["Javascript", "Python"],
        description: [
          "Develop ERP System based on ODOO's open source python and javascript based framework.",
          "Worked on enterprise product for new features and bug fixes. One of my work was also showcased on ODOO 11 launch video.",
        ],
      },
      {
        title: "Intern, Odoo",
        titleRight: "1/2017 - 6/2017",
        tags: ["Javascript", "Python"],
        description: [
          "Develop ERP Feedback System on cloud based ODOO's open source python and javascript based framework.",
        ],
      },
    ],
  },
  projectBlock: {
    blockTitle: "Projects",
    list: [
      {
        title: "React Context Devtool",
        titleRight: "Chrome Extension",
        tags: ["React JS", "Chrome API"],
        description: [
          "Devtool for debug ReactJS Context and useReducer API. Devtool have raw, tree and diff views of your JSON data. It allow you can dispatch actions from devtool in useReducer hook.",
          "10,000+ downloads in chrome web store",
        ],
      },
      {
        title: "Fire Dashboard",
        titleRight: "Chrome Extension",
        tags: ["React JS", "Chrome API"],
        description: [
          "New Tab Dashboard and Bookmark Manager. Fire dashboard is your all-in-one productivity tool with multiple workspace support.",
          "Bookmark management app that is better than bookmarks. Organize your browser tabs and access them quickly anywhere.",
        ],
      },
      {
        title: "Webpack Report",
        titleRight: "Node Module",
        tags: ["React JS", "Emotion JS"],
        description: [
          "Webpack build analysis tool. it gives a detailed report for assets, modules and chunks so you can easily optimize your webpack build.",
        ],
      },
    ],
  },
  skillBlock: {
    blockTitle: "Technical Skills",
    tags: [
      "Javascript",
      "ES6",
      "React JS",
      "Styled Component",
      "Redux",
      "Chrome Extension",
      "CSS",
      "SCSS",
      "Webpack",
    ],
  },
};

const resume = `
  <div class="resume-page-main-wrapper">
    <div class="resume-page-header">

    </div>
    <div class="resume-wrapper">
      <div class="header">
        <div class="left-header">
          <div class="name">${data.name}</div>
          <div class="designation">${data.designation}</div>
        </div>
        <div class="right-header">
          <table>
            ${data.contactDetails
              .map((contact) => {
                return `
                <tr>
                  <td class="title">${contact.title}</td>
                  <td class="value">${contact.value}</td>
                </tr>
              `;
              })
              .join("")}
          </table>
        </div>
      </div>
      <div class="link-nav">
        ${data.socialDetails
          .map((social) => {
            return `
              <div class="link-block">
                <i class="${social.icon}"></i>
                <a
                  href="${social.link}"
                  target="_blank"
                  class="value"
                >
                  ${social.title}
                </a>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="main-section">
        <div class="left">
          <div class="block">
            <div class="block-title">Experience</div>
            ${data.experienceBlock.list
              .map((item) => {
                return `
                <div class="block-content">
                  <div class="content-title">
                    <div>${item.title}</div>
                    <div class="right-title">
                      ${item.titleRight}
                    </div>
                  </div>
                  <ul class="description-list">
                    ${item.description
                      .map((desc) => {
                        return `<li>${desc}</li>`;
                      })
                      .join("")}
                  </ul>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>
        <div class="right">
          <div class="block">
            <div class="block-title">${data.profileBlock.title}</div>
            <div class="block-content">
              <div class="description-text">${
                data.profileBlock.description
              }</div>
            </div>
          </div>
          <div class="block">
            <div class="block-title">${data.educationBlock.blockTitle}</div>
            <div class="block-content">
              <div class="content-title">${data.educationBlock.title}</div>
              <div class="content-subtitle">${
                data.educationBlock.subTitle
              }</div>
              <div class="description-text">${
                data.educationBlock.description
              }</div>
            </div>
          </div>
          <div class="block">
            <div class="block-title">${data.skillBlock.blockTitle}</div>
            <div class="block-content wrap">
              ${data.skillBlock.tags
                .map((tag) => {
                  return `<span class="tag">${tag}</span>`;
                })
                .join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="project-section">
        <div class="block">
          <div class="block-title border">${data.projectBlock.blockTitle}</div>
          ${data.projectBlock.list
            .map((item) => {
              return `
              <div class="block-content">
                <div class="content-title">
                  <div>${item.title}</div>
                  <div class="right-title">
                    <div class="right-tag">
                      ${item.tags.join(", ")}
                    </div>
                    ${item.titleRight}
                  </div>
                </div>
                <ul class="description-list">
                  ${item.description
                    .map((desc) => {
                      return `<li>${desc}</li>`;
                    })
                    .join("")}
                </ul>
              </div>
            `;
            })
            .join("")}
        </div>
        <div class="many-more">
          ...and many more. you can check all of my project in <a href="https://github.com/deeppatel234" target="_blank">https://github.com/deeppatel234</a>
        </div>
      </div>
    </div>
  </div>
`;

export default resume;
