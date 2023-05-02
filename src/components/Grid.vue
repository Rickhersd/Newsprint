<template>
	<TransitionGroup tag="ul" name="fade" class="grid">
		<slot></slot>
	</TransitionGroup>		
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped> 

	.grid{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));   
    max-width: 1280px;
    margin: auto;
    margin-top: 2rem;
    column-gap: 0.75rem;
    row-gap: 0.75rem;
    justify-items: center;
    position: relative;
  }

	@media only screen and (min-width: 600px) {
  	.grid{
    	column-gap: 2rem;
    	row-gap: 2rem;
  	} 
	}

	@media only screen and (min-width: 800px) {
  	.grid{
    	display: grid;
    	grid-template-columns: repeat(3, minmax(0, 1fr));
    	max-width: 1024px;
    	column-gap: 1rem;
    	row-gap: 1rem;
 		}
	}

	@media only screen and (min-width: 1500px) {
  	.grid{
    	display: grid;
    	grid-template-columns: repeat(4, minmax(0, 1fr));
    	max-width: 1280px;

 		}
	}




</style>