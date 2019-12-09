<template>
	<div class="drag-drop">
		<input type="file" />
		<span>Drag images here</span>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'UploadForm',
	methods: mapActions(['uploadImages'])
};
</script>

<style scoped>
.drag-drop {
	height: 30vh;
	border: 2px dashed #757083;
	border-radius: 0.5rem;
	margin-top: 7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.drag-drop:hover {
	background: #d8d8d8;
}

input {
	width: 100%;
	height: 30vh;
	position: absolute;
	opacity: 0;
}

span {
	font-size: 1.8rem;
}
</style>
