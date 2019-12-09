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
	/* display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 1.1rem;
	grid-row-gap: 5rem;
	margin-top: 8rem; */
	grid-template-columns: repeat(3, 1fr);
	margin-top: 8rem;
}

.image-container img {
	max-width: 35.2rem;
	height: auto;
	padding: 1rem;
}
</style>
