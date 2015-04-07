/**
 * Convenience base element class that enables the use of ES6 class syntax.
 * Useful as you can't use `extends` directly with HTMLElement in IE.
 *
 * @class MyElement
 * @extends HTMLElement
 */
export default document.registerElement('my-element', {
	prototype: Object.create(HTMLElement.prototype)
});
