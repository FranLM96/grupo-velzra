# Plan to Move Slider to Top of Page

The goal is to move the slider to the top of the page, so it appears directly under the header.

## Steps:

1.  **Move the import statement:** Move the import statement for `SliderSection` from [`src/pages/Home.js`](src/pages/Home.js) to [`src/App.js`](src/App.js).
2.  **Remove the SliderSection component:** Remove the `SliderSection` component from [`src/pages/Home.js`](src/pages/Home.js).
3.  **Add the SliderSection component:** Add the `SliderSection` component in [`src/App.js`](src/App.js) after the `Header` component.