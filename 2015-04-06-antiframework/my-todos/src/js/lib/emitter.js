/**
 * @class Emitter
 */
export default class Emitter {
	/**
	 * @constructor
	 */
	constructor() {
		/**
		 * @property listeners
		 * @type {Array.<Object>}
		 */
		this.listeners = [];
	}

	/**
	 * @method on
	 * @param {String} event
	 * @param {Function} fn
	 * @chainable
	 */
	on(event, fn) {
		this.listeners.push({ event, fn });

		return this;
	}

	/**
	 * @method off
	 * @param {String} event
	 * @param {Function} fn
	 * @chainable
	 */
	off(event, fn) {
		var listeners = this.listeners,
			i = listeners.length;

		while (i--) {
			let listener = listeners[i];

			if (listener.event === event && listener.fn === fn) {
				listeners.splice(i, 1);
			}
		}

		return this;
	}

	/**
	 * @method emit
	 * @param {String} event
	 * @param {...*} args
	 * @chainable
	 */
	emit(event, ...args) {
		this.listeners.forEach(function(listener) {
			var lev = listener.event;

			if (lev === event || lev === '*') {
				listener.fn(...args);
			}
		});

		return this;
	}

	/**
	 * @method emitter
	 * @param {String} event
	 * @return {Function}
	 */
	emitter(event) {
		return (...args) => this.emit(event, ...args);
	}
}
