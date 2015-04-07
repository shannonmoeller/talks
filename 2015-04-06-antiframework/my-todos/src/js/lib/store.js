import Emitter from './emitter';

/**
 * @class Store
 * @extends Emitter
 */
export default class Store extends Emitter {
	/**
	 * @constructor
	 */
	constructor() {
		super();

		/**
		 * @property data
		 * @type {Object}
		 */
		this.data = {};
	}

	/**
	 * @method get
	 */
	get(key) {
		return this.data[key];
	}

	/**
	 * @method getFacade
	 */
	getFacade() {
		return {
			get: this.get.bind(this),
			on: this.on.bind(this)
		};
	}
}
