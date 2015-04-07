import MyElement from '../my-element/element';

/**
 * @class MyTabPanelElement
 * @extends MyElement
 */
class MyTabPanelElement extends MyElement {
	/**
	 * @method createdCallback
	 */
	createdCallback() {
		console.log('callback', this.tagName);
	}

	/**
	 * @method attachedCallback
	 */
	attachedCallback() {
		console.log('attached', this.tagName);
	}

	/**
	 * @method detachedCallback
	 */
	detachedCallback() {
		console.log('detached', this.tagName);
	}

	/**
	 * @method attributeChangedCallback
	 * @param {String} name
	 * @param {String} oldValue
	 * @param {String} newValue
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		console.log('attribute changed', this.tagName);
	}
}

export default document.registerElement('my-tab-panel', {
	prototype: MyTabPanelElement.prototype
});
