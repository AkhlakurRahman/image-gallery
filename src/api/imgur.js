import qs from 'qs';
import axios from 'axios';

export default {
	login() {
		const querystring = {
			client_id: process.env.VUE_APP_IMGUR_CLIENT_ID,
			response_type: 'token'
		};
		window.location = `${
			process.env.VUE_APP_ROOT_URL
		}/oauth2/authorize?${qs.stringify(querystring)}`;
	},

	fetchImages(token) {
		return axios.get(`${process.env.VUE_APP_ROOT_URL}/3/account/me/images`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}
};
