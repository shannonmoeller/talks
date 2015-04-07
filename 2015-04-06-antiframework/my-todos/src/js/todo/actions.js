/**
 * @class TodoActions
 */
export default class TodoActions {
	/**
	 * @constructor
	 * @param {String} id
	 * @param {TodoApi} api
	 * @param {TodoDispatcher} dispatcher
	 */
	constructor(id, api, dispatcher) {
		/**
		 * @property id
		 * @type {String}
		 */
		this.id = id || 'default';

		/**
		 * @property api
		 * @type {TodoApi}
		 */
		this.api = api;

		/**
		 * @property dispatcher
		 * @type {TodoDispatcher}
		 */
		this.dispatcher = dispatcher;
	}

	/**
	 * @method init
	 */
	init() {
		this.api
			.get('/api/todos/' + this.id)
			.then(this.dispatcher.emitter('TODO_ITEMS_FETCHED'));
	}

	/**
	 * @method save
	 */
	save(data) {
		this.api
			.post('/api/todos/' + this.id, data)
			.then(this.dispatcher.emitter('TODO_ITEMS_SAVED', data));
	}

	/**
	 * @method singletonFactory
	 * @param {Injector} app
	 * @return {TodoActions}
	 * @static
	 */
	static singletonFactory(app) {
		return new TodoActions(
			app.get('Env').id,
			app.get('TodoApi'),
			app.get('TodoDispatcher')
		);
	}
}
