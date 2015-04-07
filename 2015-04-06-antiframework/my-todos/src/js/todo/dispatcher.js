import Dispatcher from '../lib/Dispatcher';

/**
 * @class TodoDispatcher
 * @extends Dispatcher
 */
export default class TodoDispatcher extends Dispatcher {
	/**
	 * @method singletonFactory
	 * @return {TodoDispatcher}
	 * @static
	 */
	static singletonFactory(app) {
		return new TodoDispatcher();
	}
}
