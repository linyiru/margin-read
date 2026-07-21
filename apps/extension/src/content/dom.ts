// TypeScript 7's lib.dom types `Element.matches("<tag>")` as a `this is` guard.
// For tags that map to HTMLElement itself (e.g. "section", "dt", "figcaption"),
// the false branch collapses HTMLElement to `never`. Routing the selector through
// a `string` parameter keeps `matches` a plain boolean test.
export function matchesSelector(element: Element, selector: string): boolean {
  return element.matches(selector);
}
