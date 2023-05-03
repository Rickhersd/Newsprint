<template>
		<button block class="toolbar-aside-btn" :rounded="0" size="x-large">
			<v-tooltip activator='parent'>
				{{tooltipText}}
			</v-tooltip>
			<slot></slot>
			<div class="toolbar-aside-btn__text">
			{{tooltipText}}
			</div>
    </button>
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
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100% !important;
		background-color: white;
		transition: all 0.3s ease;
		border-radius: 0px;
		box-shadow: none;
		padding: 0.25rem 0rem;

		& i:before{
			color:var(--vue-mint);
		}

		&__text{
			font-size: 10px;
			color: var(--vue-blue);
			font-weight: 700;
		}
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

		& i:before{
			color: white;
		}

		&__text{
			display: none;
		}
	}
}

</style>