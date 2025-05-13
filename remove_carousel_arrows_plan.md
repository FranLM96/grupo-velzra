# Plan: Remove Navigation Arrows from Desktop View of ServiceCarousel

This plan outlines the steps to remove the navigation arrows from the desktop view of the `ServiceCarousel.js` component and adjust the carousel width accordingly.

**Steps:**

1.  **Identify the relevant code:** Locate the section within the [`ServiceCarousel.js`](src/components/ServiceCarousel.js) file that conditionally renders the desktop layout based on the [`isTabletUp`](src/components/ServiceCarousel.js:24) media query. Within this section, identify the [`Box`](src/components/ServiceCarousel.js:114) component that contains the [`IconButton`](src/components/ServiceCarousel.js:124) elements for the left and right navigation arrows.
2.  **Remove the navigation buttons Box:** Delete the entire [`Box`](src/components/ServiceCarousel.js:114) component (including its children, the [`IconButton`](src/components/ServiceCarousel.js:124)s) that is responsible for displaying the navigation arrows in the desktop layout.
3.  **Adjust carousel width:** Find the [`Box`](src/components/ServiceCarousel.js:153) component that wraps the [`AutoPlaySwipeableViews`](src/components/ServiceCarousel.js:154) within the desktop layout section. Change its `width` style property from `90%` to `100%` so that the carousel occupies the full available width after the navigation buttons are removed.
4.  **Review changes:** Verify that the navigation arrows are no longer present in the desktop view and that the carousel now takes up the full width. Confirm that the mobile view remains unaffected.

**Diagram:**

```mermaid
graph TD
    A[ServiceCarousel Component] --> B{isTabletUp?}
    B -- Yes --> C[Desktop Layout]
    B -- No --> D[Mobile Layout]

    C --> E[Nav Buttons Box (Remove)]
    C --> F[Carousel Box (Change width to 100%)]

    D --> G[Mobile Carousel Box]