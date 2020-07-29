import myPhoto from "./my-photo.png";

const home = `
    <div id="home-page">
        <div class="home-name animate__animated animate__fadeIn">
            <div>
                Hi,
            </div>
            <div class="bold">
                I’m <span class="text-primary">Deep Patel</span>,
            </div>
            <div>
                Javascript Developer.
            </div>
            <div class="sub-footer">
                Front End Developer | NodeJS Developer
            </div>
            <a
                class="contect-me-footer"
                href="mailto:deeppatel234@gmail.com"
                target="_blank"
            >
                Contact Me
            </a>
        </div>
        <div class="animate__animated animate__fadeIn">
            <img class="my-photo" src="${myPhoto}" />
        </div>
    </div>
`;

export default home;
