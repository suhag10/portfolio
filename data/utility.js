// Utility
const date = new Date();
const year = date.getFullYear();
const url  = new URL(document.location.href);

const Author = {
    name :       'Suhag Ahmed',
    title:       'WordPress Developer',
    number:      '+8801311251925',
    email:       'hellosuhag140@gmail.com',
    workTitle:   'WordPress Developer',
    image:       'https://avatars.githubusercontent.com/u/89881464?v=4&size=100',
    description: '',
}

var socialMedia = {
    facebook: 'https://www.facebook.com/suhagahmed.dev',
    twitter:  'https://twitter.com/suhag_11',
    linkedin: 'https://www.linkedin.com/in/suhag11/',
    github:   'https://github.com/suhag10',
};


const mainMenu = [
    {name: 'Home',    url: './index.html#home',  submenu: null},
    {name: 'About',   url: './index.html#about',
        submenu: [
            {name: 'Qualification', url: './index.html#qualification'},
            {name: 'CTA',           url: './index.html#cta'},
            {name: 'Testimonials',  url: './index.html#testimonials'},
        ]
    },
    {name: 'Skill',   url: './index.html#skill', submenu: null},
    {name: 'Project', url: './index.html#creative_work',
        submenu: [
            {name: 'Web Design', url: './index.html#web_design'},
        ]
    },
    // {name: 'Blog',    url: './blog.html', submenu: null},
    {name: 'Contact', url: './index.html#contact', submenu: null},
];


function getTruncateText(description, maxLength = 15, moreButton = '[...]') {
    if (description) {
        let tagTrim = description.replace(/(?:(<[^\/>]*>(?:<[^\/>]*>)*)(\s*))|(?:(\s*)(<\/[^>]*>(?:<\/[^>]*>)*))/g, '');
        let words = tagTrim.split(" ");
        
        if (words.length > maxLength) {
            let truncated = words.slice(0, maxLength).join(" ");
            description = truncated + moreButton;
        }
    }

    return (description);
}
