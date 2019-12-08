<template>
	<header class="header">
		<nav class="navbar">
			<div class="logo">
				<a href="/">Image Gallery</a>
			</div>
			<div class="links">
				<a href="#" @click="login">Log in</a>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'Header',
	methods: mapActions(['login'])
};
</script>

<style scoped>
.header {
	width: 100vw;
	background: #d8d8d8;
	height: 7rem;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 7rem;
}

.logo a {
	font-size: 2.5rem;
	margin-left: 2rem;
	letter-spacing: 0.4rem;
	font-weight: bold;
}

.links a {
	font-size: 1.8rem;
	margin-right: 2rem;
	padding: 1rem 1.2rem;
	border-radius: 0.4rem;
	transition: all 0.4s;
}

.links a:hover {
	background: #757083;
	color: #fff;
}
</style>
