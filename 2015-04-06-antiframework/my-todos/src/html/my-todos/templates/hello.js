import { html } from '../../../js/lib/template/html';
import list from './list';

export default (data) => html`
	<p>Hello, $${data.name || 'World'}!</p>
	<ul>
		${data.items.map((item) => html`
			<li>$${item.prop}</li>
		`)}
	</ul>
	${list(data)}
`;
