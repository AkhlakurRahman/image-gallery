import qs from 'qs';

export default {
	login() {
		const querystring = {
			client_id: process.env.VUE_APP_IMGUR_CLIENT_ID,
			response_type: 'token'
		};
		window.location = `${
			process.env.VUE_APP_ROOT_URL
		}/oauth2/authorize?${qs.stringify(querystring)}`;
	}
};
