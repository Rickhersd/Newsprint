<template>
	<div class="content">
		<div class="content__close-cont">
			<v-btn class="content__close-btn" density="comfortable" variant='text' icon='mdi-close' @click="emits('close')"></v-btn>
		</div>
  	<slot></slot>
  </div>
</template>

<script setup lang='ts'>
	
	const emits = defineEmits<{
		(e: 'close'):void
	}>()

</script>

<style lang='scss'>

	.content{

		background-color: rgb(252, 252, 252);

		&__close{

			&-cont{
				padding: 0.5rem 0.75rem;
				display: flex;
				justify-content: flex-end;
			}
		}

		h1{
			font-size: 2.5rem;
			color: var(--vue-blue);
			padding: 0rem 0.75rem;
			font-weight: 800;
		}

		p{
			font-size: 16px ;
			margin: 0.25rem 0.75rem 0.5rem 0.75rem;
			color: var(--font-grey);
		}

		h2{
			font-size: 26px;
			font-weight: 700;
			color: var(--vue-blue);
			margin: 1rem 0.75rem 0.25rem 0.75rem;
		}

		h3{
			font-size: 20px;
			font-weight: 500;
			margin: 1.5rem 0.5rem 0.25rem 0.5rem;
			color: rgb(150, 150, 150);
		}

		ul{
			margin: 0.25rem 0.75rem 0.5rem 0.75rem;
		}

		li{
			list-style: disc;
			margin: 0.25rem 0.75rem 0.25rem 1.75rem;
		}

		.code{
			margin-bottom: 1rem;
		}

	}

</style>