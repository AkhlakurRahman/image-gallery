<template>
	<div class="image-container">
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

<style scoped>
.image-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 8rem;
}

.image-container img {
	width: 50rem;
	height: 30rem;
	margin-bottom: 2rem;
}
</style>
