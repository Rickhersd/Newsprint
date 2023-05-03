<template >
	<!-- <v-btn class='flashcard' :to='to' height='auto'> -->
	  <v-card
	    class="mx-auto"
	   	:rounded="'lg'"
			:to='to'
			:elevation='0'
			variant='outlined'
				:class="
				{'flashcard__disabled': comingSoon }
			"
	    >
	    <div :style="comingSoon? {filter: 'contrast(0.7)'} : {}"
	    class="flashcard__content-cont">
	  		<h3 class='flashcard__title'>{{title}}</h3>
	  		<div class='flashcard__thumbnailSudoku'>
	  		<slot></slot>	 
	  		</div>  
	  		<div class='flashcard__subtitle' :style="{visibility: subtitle != 'null'? 'visible' : 'hidden'}">{{subtitle}}</div>
	    	<div class="flashcard__difficulty" v-if='difficulty'>
	      	<!-- <div class="flashcard__difficulty-label">{{difficulty.label}}</div> -->
	      	<div>
			    	<v-icon 
			    		v-for='n in difficulty.starsNumber' 
			    		icon="mdi-star"
			    		class="flashcard__difficulty-star"
			    		>
			    	</v-icon>
			    	<v-icon 	
			    		v-for='n in 4 - difficulty.starsNumber' 
			    		icon="mdi-star-outline"
			    		class="flashcard__difficulty-star"
			    		>
			    	</v-icon>
			    </div>
	      </div>
	    </div>
      <div v-if='comingSoon' class="flashcard__coming-soon">
      	Próximamente
      </div>
	  </v-card>
	<!-- </v-btn> -->
</template>

<script lang='ts' setup>
	import { Difficulty } from '../types/types'

	interface Props {
		title?: string,
		difficulty?: Difficulty,
		subtitle?:  string, 
		comingSoon?: boolean,
		to?: string,
	}

	withDefaults(defineProps<Props>(),{
		title: 'flashcard',
		difficulty: undefined,
		subtitle:  'null', 
		comingSoon: false,
		to: undefined,
	})
</script>

<style lang="scss">

	.flashcard{
		
		&:active, &:visited, &:link {
			text-decoration: none;
		}

		&__title{
			font-size: 1.25rem;
			font-weight: 500;
			padding: 0.5rem;
		}

		&__subtitle{
			padding: 0.25rem 0rem;
		}

		&__disabled{
			box-shadow: initial !important;
		}

		&__content-cont{
			width: 100%;
			background-color: white;
			overflow: hidden;
			height: 100% !important;
			display: flex !important;
			flex-direction: column;
			align-items: center;
		}

		&__difficulty{
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: center;
			padding: 0.5rem 1.25rem 0.75rem 1.25rem;
			font-size: 12px;

			&-star::before{
				color: var(--vue-blue);					
			}

			&-label{
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		&__thumbnailSudoku{
			padding: 0rem 1.5rem;
			width: 100%;
		}

		&__coming-soon{
			background-color: red;
			position: absolute;
			background-color: var(--vue-blue);
			color:white;
			bottom: 1.75rem;
			font-size: 0.75rem;
			padding: 0.25rem 5rem;
			right: -5rem;
			transform-origin: center;
			transform: rotateZ(-45deg); 
		}
	}

	.v-card{
		width: 100%;
		overflow: hidden;
		border-radius: 0.75rem !important;
		padding: 0rem !important;
		height: 100% !important;
		display: flex !important;
		flex-direction: column;
		align-items: center;
		font-size: 0.5rem;
		border: var(--vue-blue) solid 1px !important;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
		transition-property: box-shadow, opacity, background, scale !important;

		&:not(.flashcard__disabled){
			
			z-index: 10;
		}

		&-title{
			font-size: 1.75rem !important;
			font-weight: 500 !important;
			color: var(--font-lightgray);
			padding: 1.5rem !important;
		}

		&:not(.flashcard__disabled):hover{
			scale: 1.05;
		}
	}

  .v-card-actions{
  	justify-content: space-between;
  }

  .v-card--disabled{  
  	opacity: 1 !important;
  }

@media only screen and (min-width: 600px) {
  .v-card {
    font-size: 1rem;
    
  }

  .flashcard{

  	&__title{
			font-size: 1.5rem;
			font-weight: 500;
			padding: 1rem 0rem;
		}


  	&__thumbnailSudoku{
			padding: 0rem 2rem;
		
		}

		&__coming-soon{
			background-color: red;
			position: absolute;
			background-color: var(--vue-blue);
			color:white;
			bottom: 2.5rem;
			font-size: 1rem;
			padding: 0.25rem 5rem;
			right: -5rem;
			transform-origin: center;
			transform: rotateZ(-45deg); 
		} 
	}


}

@media only screen and (min-width: 800px) {
  .v-card {
    font-size: 1.125rem;
    
  }

  .flashcard{

  	&__thumbnailSudoku{
			padding: 0rem 2rem;
		
		}

		&__coming-soon{
			background-color: red;
			position: absolute;
			background-color: var(--vue-blue);
			color:white;
			bottom: 2.5rem;
			font-size: 1rem;
			padding: 0.25rem 5rem;
			right: -5rem;
			transform-origin: center;
			transform: rotateZ(-45deg); 
		} 
	}


}

@media only screen and (min-width: 1024px) {
  .v-card {
    font-size: 1.125rem;
    
  }

  .flashcard{

  	&__thumbnailSudoku{
			padding: 0rem 2rem;
		
		}

		&__coming-soon{
			background-color: red;
			position: absolute;
			background-color: var(--vue-blue);
			color:white;
			bottom: 2.5rem;
			font-size: 1rem;
			padding: 0.25rem 5rem;
			right: -5rem;
			transform-origin: center;
			transform: rotateZ(-45deg); 
		} 
	}


}




</style>