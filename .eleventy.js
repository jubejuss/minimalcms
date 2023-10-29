const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {
    // show styles folder path
    eleventyConfig.addPassthroughCopy("styles.css");

    // add all needable for classes and so on
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAttrs);
    
    eleventyConfig.setLibrary("md", markdownLibrary);

    // Create a collection for all pages
    eleventyConfig.addCollection("menuItems", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
