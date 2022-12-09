const dictionary = {
    0:" ",
    1:"",
    2:"a",
    22:"b",
    222:"c",
    3:"d",
    33:"e",
    333:"f",
    4:"g",
    44:"h",
    444:"i",
    5:"j",
    55:"k",
    555:"l",
    6:"m",
    66:"n",
    666:"o",
    7:"p",
    77:"q",
    777:"r",
    7777:"s",
    8:"t",
    88:"u",
    888:"v",
    9:"w",
    99:"x",
    999:"y",
    9999:"z"
}

function completeExecution(input){
    return translateInputToMessage(splitInput(input))
}

function splitInput(input){

    splittedInput = []
    nextStartingSliceIndex = 0

    for(let i=0;i<input.length;i++){

        if
            (
                checkIfCurrentElementEqualsNextElement(input[i], input[i+1]) == false 
                || checkIfCurrentElementEquals1(input[i]) == true 
                || (checkIfArraySliceSizeEquals2(i, nextStartingSliceIndex) == true
                    && (checkIfCurrentElementIs7(input[i]) == false 
                    && checkIfCurrentElementIs9(input[i]) == false)) 
                || (checkIfArraySliceSizeEquals3(i, nextStartingSliceIndex) == true 
                    && (checkIfCurrentElementIs7(input[i]) == true 
                    || checkIfCurrentElementIs9(input[i])))
            )
        {
            splittedInput.push(sliceInputGroupingEqualElements(input, nextStartingSliceIndex, getSlicingIndexes(i)))
            nextStartingSliceIndex = getSlicingIndexes(i)
        }
    }
    return splittedInput
}

function translateInputToMessage(splittedInput){
    let translatedMessage = ''
    for(let i=0;i<splittedInput.length;i++){
        translatedMessage += dictionary[splittedInput[i]]
    }
    return translatedMessage
}

function checkIfCurrentElementEqualsNextElement(currentElement, nextElement){
    if(currentElement != nextElement){
        return false
    }else{
        return true
    }
}

function checkIfCurrentElementEquals1(currentElement){
    if(currentElement == '1'){
        return true
    }else{
        return false    
    }
}

function checkIfArraySliceSizeEquals2(currentElement, nextSliceStartingIndex){
    if(currentElement - nextSliceStartingIndex == 2){
        return true
    }else{
        return false
    }
}

function checkIfArraySliceSizeEquals3(currentElement, nextSliceStartingIndex){
    if(currentElement - nextSliceStartingIndex == 3){
        return true
    }else{
        return false
    }
}

function checkIfCurrentElementIs7(currentElement){
    if(currentElement.includes('7')){
        return true
    }else{
        return false
    }
}

function checkIfCurrentElementIs9(currentElement){
    if(currentElement.includes('9')){
        return true
    }else{
        return false
    }
}

function sliceInputGroupingEqualElements(input, nextSliceStartingIndex, finalSliceindex){
    return input.slice(nextSliceStartingIndex, finalSliceindex)
}

function getSlicingIndexes(currentIndex){
    return currentIndex+1
}

module.exports = {completeExecution, splitInput, translateInputToMessage, checkIfCurrentElementEqualsNextElement, checkIfCurrentElementEquals1, checkIfArraySliceSizeEquals2, checkIfArraySliceSizeEquals3, checkIfCurrentElementIs7, checkIfCurrentElementIs9, sliceInputGroupingEqualElements, getSlicingIndexes}