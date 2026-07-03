import "@testing-library/jest-dom/vitest";

// jsdom lacks matchMedia and IntersectionObserver; stub them.
if (!window.matchMedia) {
  window.matchMedia = (q: string) => ({
    matches: false, media: q, onchange: null,
    addEventListener() {}, removeEventListener() {},
    addListener() {}, removeListener() {}, dispatchEvent() { return false; },
  }) as unknown as MediaQueryList;
}
class IO { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
// @ts-expect-error test stub
window.IntersectionObserver = IO;
