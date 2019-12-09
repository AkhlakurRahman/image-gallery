<template>
	<div id="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/Header';

export default {
	name: 'App',
	components: {
		Header
	}
};
</script>

<style>
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
	font-size: 62.5%;
}

body {
	font-weight: 300;
	line-height: 1.6;
	font-family: 'Baskervville', serif;
}

a {
	text-decoration: none;
	color: #000;
}

#app {
	margin: 0 auto;
}

.container {
	max-width: 110rem;
}
</style>
