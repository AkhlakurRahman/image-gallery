<template>
	<div>
		<img
			v-for="image in allImages"
			:key="image.id"
			:src="image.link"
			:alt="image.title"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ImageList',
	methods: mapActions(['fetchImages']),
	created() {
		this.fetchImages();
	},
	computed: mapGetters(['allImages'])
};
</script>

<style scoped></style>
