// requre Luxon for date conversion
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Set directories to pass through to the _site folder
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy("src/js/");

  // Watch scss folder for changes
  eleventyConfig.addWatchTarget("/src/assets/images/");
  eleventyConfig.addWatchTarget("/src/js/");
  eleventyConfig.addWatchTarget("/src/styles/");

  // open a browser window on --watch
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  // shortcode for inserting the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // convert date to [Month DD, YYYY], set timezone to UTC to ensure date is not off by one
  // https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html
  // https://www.11ty.dev/docs/dates/#dates-off-by-one-day
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(
      DateTime.DATE_FULL
    );
  });

  return {
    // set the input and output directories
    dir: {
      input: "src",
    },
  };
};
