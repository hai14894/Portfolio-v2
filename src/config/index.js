module.exports = {

    author: "hai14894",
    siteTitle: "Hai's portfolio",
    siteDescription: "A modern and simple one-page portfolio to showcase my web development skills",
    siteUrl: "https://hai14894.me",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{your name}
    mediumRssFeed: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hohoanghai14894",
    shownArticles: 3,
    

    navLinks: {
        menu: [
            {
                name: "Projects",
                url: "/#projects",
            },
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Contact",
                url: "/#contact",
            }
        ]
    },
}