import api from '../../api/imgur';

const state = {
	images: []
};

const getters = {
	allImages: state => state.images
};

const actions = {
	fetchImages: async ({ rootState, commit }) => {
		const { token } = rootState.auth;
		const res = await api.fetchImages(token);

		commit('setImages', res.data.data);
	}
};

const mutations = {
	setImages: (state, images) => {
		state.images = images;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
