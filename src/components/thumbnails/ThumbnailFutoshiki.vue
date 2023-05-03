<template >
  <div class="thumbnail-futoshiki__board"
  	:style="{
      gridTemplateColumns: `repeat(${builtGameboard.length}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${builtGameboard.length}, minmax(0, 1fr))`,
    }"
  >
    <div v-for="row in builtGameboard" class="thumbnail-futoshiki__row" 
    	:style="{
      	gridColumnEnd: builtGameboard.length + 1,
      	gridTemplateColumns: `repeat(${builtGameboard.length}, minmax(0, 1fr))`,
    	}"
    >
      <div v-for="cell in row" class="thumbnail-futoshiki__cell">
      	<div class="thumbnail-futoshiki__input">
		      <h4 v-if="cell.value !== 0" class="thumbnail-futoshiki__cell">
		        {{ cell.value }}
		      </h4>
		      <span 
		        v-if="cell.comparisons" 
		        v-for="comparison in cell.comparisons"  
		        class="thumbnail-futoshiki__arrow"
		        >
		        <v-icon 
		          v-if="comparison.type === 'left'"
		          class="thumbnail-futoshiki__arrow-left"
		          icon="mdi-chevron-left" 
		        ></v-icon>
		        <v-icon
		          v-if="comparison.type === 'right'"
		          class="thumbnail-futoshiki__arrow-right"
		          icon="mdi-chevron-right"
		        ></v-icon>
		        <v-icon
		          v-if="comparison.type === 'top'"
		          class="thumbnail-futoshiki__arrow-top"
		          icon="mdi-chevron-up"
		        ></v-icon>
		        <v-icon
		          v-if="comparison.type === 'bottom'"
		          class="thumbnail-futoshiki__arrow-bottom"
		          icon="mdi-chevron-down"
		        ></v-icon>
		      </span>
	    	</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import buildFutoshikiBoard from "../../utils/futoshikiUtils/buildFutoshikiBoard"

  const props = defineProps<{
    gameboard:  (number | ("top" | "left" | "right" | "bottom")[] | null)[][];
  }>()

  const builtGameboard = buildFutoshikiBoard(props.gameboard)

</script>

<style lang="scss">

.thumbnail-futoshiki{

  &__board{
    width: calc(100% + 1px);
    aspect-ratio: 1/1;
    display: grid;
    box-sizing: content-box;
    border: 2px solid rgb( 2 2 2);
    box-shadow: 0 0 4px var(--font-teal-transparent);
  }

  &__row {
		width: calc(100%);
		height: 100%;
		display: grid;
		box-sizing: content-box;
		grid-column-start: 1;
	}

  &__cell{
    height: 100%;
		width: 100%;
		box-sizing: content-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

  &__input{
    aspect-ratio: 1/1;
    width: 67.5%;
    position: relative;
    border: 1px solid var(--light-border);
    -webkit-user-select: none;
  	-ms-user-select: none; 
  	user-select: none; 
  }

	&__arrow{
	  position: absolute;
	  aspect-ratio: 1/1;
	  width: 100%;
	  height: 100%;
	  display: block;
	  top: 0%;
	  left: 0%;

	  &-cont {
	    width: 100%;
	    height: 100%;
	    display: block;
	    position: absolute;
	  }

	  &-left {
	    translate: -50% -50%;
	    top: 50%;
	    left: -26.25%;
	    position: absolute;

	    &::before {
	    	font-size: 1.75rem;
	    	color: var(--dark-border);
	  	}
	  }

	  &-bottom {
	    translate: -50% 50%;
	    bottom: -26.25%;
	    left: 50%;
	    position: absolute;

	    &::before {
	    	font-size: 1.75rem;
	    	color: var(--dark-border);
	  	}
	  }

	  &-top {
	    translate: -50% -50%;
	    top: -26.25%;
	    left: 50%;
	    position: absolute;

	    &::before {
	    	font-size: 1.75rem;
	    	color: var(--dark-border);
	  	}
	  }

	  &-right {
	    translate: 50% -50%;
	    top: 50%;
	    right: -26.25%;
	    position: absolute;

	    &::before {
	    	font-size: 1.75rem;
	    	color: var(--dark-border);
	  	}
	  }
  }
}
</style>