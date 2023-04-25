import { invertGameBoard,} from "../utils";
import { NonogramBoardType, NonogramPatterns, NonogramPattern} from "../../types/nonogramTypes";
import getNonogramPatterns from "./getNonogramPatterns";

export default function validateNonogram (
	nonogramBoard: NonogramBoardType, 
	rowPatterns: NonogramPatterns, 
	colPatterns: NonogramPatterns
	): boolean {
	setIdlePatterns(rowPatterns);
	setIdlePatterns(colPatterns);

	const currentRowPatterns = getNonogramPatterns(nonogramBoard);
	const currentColPatterns = getNonogramPatterns(invertGameBoard(nonogramBoard));

	compareNonogramPatterns(currentRowPatterns, rowPatterns);
	compareNonogramPatterns(currentColPatterns, colPatterns);

	return (checkCorrectPatterns(rowPatterns) && checkCorrectPatterns(colPatterns)); 	
}

function setIdlePatterns(nonogramPatterns: NonogramPatterns){
	nonogramPatterns.forEach(nonogramPattern => nonogramPattern.forEach(patternValue => patternValue.state = 'idle'))
}

function checkCorrectPatterns(nonogramPatterns: NonogramPatterns):boolean {
	for(const nonogramPattern of nonogramPatterns){
		for(const patternValue of nonogramPattern){
			if(patternValue.state != 'completed') return false;
		}
	}
	return true;
}
	
function compareNonogramPatterns(nonogramPatterns: NonogramPatterns , targetPatterns: NonogramPatterns ){
	nonogramPatterns.forEach((nonogramPattern, patternIndex) => {
		const targetNonogramPattern = targetPatterns[patternIndex];
		const restNonogramPattern = rightToLeftComparative(nonogramPattern, targetNonogramPattern);
		if (restNonogramPattern != null){
			leftToRightComparative(restNonogramPattern, targetNonogramPattern)
		}
	});

	function rightToLeftComparative(nonogramPattern:NonogramPattern, targetPattern: NonogramPattern):NonogramPattern | null {
		for (let i = 1; i <= nonogramPattern.length; i++){

			const nonogramPatternValue = nonogramPattern[nonogramPattern.length - i];
			const targetPatternValue = targetPattern[nonogramPattern.length - i];

			if(targetPatternValue === undefined) return null;
			if(targetPatternValue.state === 'completed') return null;
			if(nonogramPatternValue.value !== targetPatternValue.value){
				return nonogramPattern.slice(0, nonogramPattern.length - i); 
			}
			targetPatternValue.state = 'completed';
		}
		return null
	}

	function leftToRightComparative(nonogramPattern:NonogramPattern, targetPattern: NonogramPattern ):NonogramPattern | null{
		for (let i = 0; i < nonogramPattern.length; i++){

			const nonogramPatternValue = nonogramPattern[i];
			const targetPatternValue = targetPattern[i];

			if(targetPatternValue === undefined) return null;
			if(targetPatternValue.state === 'completed') return null;
			if(nonogramPatternValue.value !== targetPatternValue.value){
				return nonogramPattern.slice(0, nonogramPattern.length - i); 
			}
			targetPatternValue.state = 'completed';
		}
		return null

	}
}