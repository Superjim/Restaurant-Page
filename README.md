# Restaurant-Page

Restaurant website build mostly with Javascript.

:point_right:[Live Demo](https://superjim.github.io/Restaurant-Page/)

The HTML file contains one single div and everything is added as a DOM.

Each page has its own js file, with an additional website.js file which builds the initial page (header+navbar, content element, and footer).
An index.js file is used to call the function.

All of the files are built with webpack, which has been configured adding css and images. The dist folder has been forked to github pages for the live demo.

The menu is built and loaded from an array, which contains submenus (lunch, dinner, sunday roast).
These submenus contain arrays for starters, mains and desserts, apart from lunch which doesn't have any starters.

A google font is imported and I have used fontawesome icons.
