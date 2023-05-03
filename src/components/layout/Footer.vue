<template>
	<div class="footer">
    <div class="footer__text">
      Este es un projecto desarrollado con <v-icon icon='mdi-vuejs'></v-icon> @ {{ new Date().getFullYear() }} - <strong>PuzzleCodes</strong>
    </div>
    <div>
      <v-btn href='https://github.com/Rickhersd/Newsprint' variant='text' density="comfortable" icon='mdi-github' >
      </v-btn>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang="scss">
	
	.footer{
    background: transparent;
    border-top: 1px solid darkgray;
    box-sizing: content-box;
    display: none;
    font-size: 0.75rem;
    padding: 0.25rem 0px;
    margin: 2rem 1rem 0rem 1rem;
    justify-content: space-between;
    max-height: 40px;
    position: relative;

    &__text{
    	display: flex;
    	align-items: center;
    	justify-items: center;
    }
  }

  @media only screen and (min-width: 600px){
  	.footer{
  		display: flex;
  	}
  }


</style>