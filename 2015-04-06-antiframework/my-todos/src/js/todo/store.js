import Store from '../lib/Store';

/**
 * @class TodoStore
 * @extends Store
 */
export default class TodoStore extends Store {
	/**
	 * @constructor
	 * @param {Dispatcher} dispatcher
	 */
	constructor(dispatcher) {
		super();

		/**
		 * @property dispatcher
		 * @type {Dispatcher}
		 */
		this.dispatcher = dispatcher;

		this.enable();
	}

	/**
	 * @method enable
	 * @chainable
	 */
	enable() {
		this.dispatcher
			.on('TODO_ITEMS_FETCHED', this.update.bind(this));

		return this;
	}

	/**
	 * @methoddisable
	 * @chainable
	 */
	disable() {
		this.dispatcher
			.off('TODO_ITEMS_FETCHED', this.update.bind(this));

		return this;
	}

	/**
	 * @method update
	 * @param {Object} json
	 * @param {?String} name
	 * @param {?Array} items
	 * @chainable
	 */
	update({ name = '', items = [] } = {}) {
		var data = this.data;

		data.name = name;
		data.items = items;

		return this.emit('CHANGED');
	}

	/**
	 * @method singletonFactory
	 * @param {Injector} app
	 * @return {TodoStore}
	 * @static
	 */
	static singletonFactory(app) {
		return new TodoStore(
			app.get('TodoDispatcher')
		);
	}
}
