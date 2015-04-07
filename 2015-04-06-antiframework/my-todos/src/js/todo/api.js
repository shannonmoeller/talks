/**
 * @class TodoApi
 * @static
 */
export default {
	/**
	 * @method get
	 */
	get(url) {
		return new Promise(function (resolve, reject) {
			try {
				var json = JSON.parse(localStorage.getItem(url));
				resolve(json || undefined);
			}
			catch (e) {
				reject(e);
			}
		});
	},

	/**
	 * @method post
	 * @param {String} url
	 * @param {Object} data
	 */
	post(url, data) {
		return new Promise(function (resolve, reject) {
			try {
				localStorage.setItem(url, JSON.stringify(data));
				resolve();
			}
			catch (e) {
				reject(e);
			}
		});
	}
};
