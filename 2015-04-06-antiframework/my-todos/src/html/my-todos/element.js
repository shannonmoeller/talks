import MyElement      from '../my-element/element';
import template       from './templates/hello';

import Injector       from '../../js/lib/injector';
import TodoActions    from '../../js/todo/actions';
import TodoApi        from '../../js/todo/api';
import TodoDispatcher from '../../js/todo/dispatcher';
import TodoStore      from '../../js/todo/store';

/**
 * The `my-todos` element definition.
 *
 * @class MyTodosElement
 * @extends MyElement
 */
class MyTodosElement extends MyElement {
	/**
	 * @method createdCallback
	 */
	createdCallback() {
		var app = new Injector()
			.set('Env',            this.dataset)
			.set('TodoActions',    TodoActions)
			.set('TodoApi',        TodoApi)
			.set('TodoDispatcher', TodoDispatcher)
			.set('TodoStore',      TodoStore);

		this.app = app;
		this.store = app.get('TodoStore');
		this.actions = app.get('TodoActions');

		this.render = this.render.bind(this);
	}

	/**
	 * @method attachedCallback
	 */
	attachedCallback() {
		this.store
			.on('CHANGED', this.render);

		this.actions.init();
	}

	/**
	 * @method detachedCallback
	 */
	detachedCallback() {
		this.store
			.off('CHANGED', this.render);
	}

	/**
	 * @method render
	 * @chainable
	 */
	render(data) {
		var store = this.store;

		this.innerHTML = template({
			name: store.get('name'),
			items: store.get('items')
		});
	}
}

export default document.registerElement('my-todos', {
	prototype: MyTodosElement.prototype
});
