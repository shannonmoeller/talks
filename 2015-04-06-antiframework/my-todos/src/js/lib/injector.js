import guid from './crypto/guid';

/**
 * @class Injector
 */
export default class Injector {
	/**
	 * @constructor
	 */
	constructor() {
		/**
		 * @property id
		 * @type {String}
		 */
		this.id = guid();

		/**
		 * @property instances
		 * @type {WeakMap}
		 */
		this.instances = new WeakMap();

		/**
		 * @property modules
		 * @type {Object}
		 */
		this.modules = {};
	}

	/**
	 * @method get
	 * @param {String} name
	 * @param {*} options
	 * @return {*}
	 */
	get(name, options) {
		var module = this.modules[name],
			instances = this.instances;

		// Module required
		if (module == null) {
			throw new Error(`Cannot find module: ${name}`);
		}

		// Create singleton
		if (typeof module.singletonFactory === 'function') {
			if (!instances.has(module)) {
				instances.set(module, module.singletonFactory(this, options));
			}

			return instances.get(module);
		}

		// Create instance
		if (typeof module.factory === 'function') {
			return module.factory(this, options);
		}

		// Use value
		return module;
	}

	/**
	 * @method set
	 * @param {String} name
	 * @param {*} options
	 * @chainable
	 */
	set(name, module) {
		this.modules[name] = module;

		return this;
	}
}
