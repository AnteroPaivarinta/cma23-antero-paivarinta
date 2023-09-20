function checkSentenceVowels(sentence:string) {

    // Check how many different vowels we have in the sentence

    let countOfAs = 0;
    let countOfEs = 0;
    let countOfIs = 0;
    let countOfOs = 0;
    let countOfUs = 0;
    let countOfYs = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i).toLowerCase() === 'a') {
            countOfAs++;
        }
        if (sentence.charAt(i).toLowerCase() === 'e') {
            countOfEs++;
        }
        if (sentence.charAt(i).toLowerCase() === 'o') {
            countOfOs++;
        }
        if (sentence.charAt(i).toLowerCase() === 'i') {
            countOfIs++;
        }
        if (sentence.charAt(i).toLowerCase() === 'y') {
            countOfYs++;
        }
        if (sentence.charAt(i).toLowerCase() === 'u') {
            countOfUs++;
        }
    }
  
    console.log("A letter count: " + countOfAs);
    console.log("E letter count: " + countOfEs);
    console.log("I letter count: " + countOfIs);
    console.log("O letter count: " + countOfOs);
    console.log("U letter count: " + countOfUs);
    console.log("Y letter count: " + countOfYs);

    const totalCount = countOfAs + countOfEs + countOfIs + 
        countOfOs + countOfUs + countOfYs;

    console.log("Total vowel count: " + totalCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");