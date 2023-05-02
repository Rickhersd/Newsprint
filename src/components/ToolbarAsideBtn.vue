<template>
		<v-btn block class="toolbar-aside-btn" :rounded="0" size="x-large">
			<v-tooltip activator='parent'>
				{{tooltipText}}
			</v-tooltip>
			<slot></slot>
    </v-btn>
</template>

<script lang="ts" setup>
	
	defineProps<{
		tooltipText: string;
	}>()

</script>

<style lang='scss'>

	.toolbar-aside-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100% !important;
		background-color: var(--vue-mint);
		transition: all 0.3s ease;
		border-radius: 0px;
		box-shadow: none;
		padding: 0.75rem 0rem;
	}

@media only screen and (min-width: 640px) {

	.toolbar-aside-btn{
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
	
		width: 100%;
		height: 100% !important;
		aspect-ratio: 1/1;
		background-color: var(--vue-mint);
		transition: all 0.3s ease;

		&:hover{
			scale: 1.05;
			box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		}
	}

}

</style>