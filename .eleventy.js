

module.exports = function (eleventyConfig) {
    // Add plugins
    
    // config.addPassthroughCopy({
    //     '_includes/_site/css/tailwind.css': './tailwind.css'
    // });


    return {
      

        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        passthroughFileCopy: true,
    };
};
