import { html } from '../../js/helpers';

export default function(data) {
	return html`
		<header>Header</header>

		${data.items.map((item) => html`
			<my-tab onclick="this.parentNode.onTabClicked(this)">${item}</my-tab>
			<my-tab-panel>
				<p>${item} content.</p>
			</my-tab-panel>
		`)}

		<footer>Footer</footer>
	`;
}
