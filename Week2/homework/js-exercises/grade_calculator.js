function gradeCalc(score) {// function declaration that takes in score as an argument
    if (score >= 90 && score <= 100) {
        console.log(`You got an A (${score}%)!`); //logs A if score is between 90 and 100
    }

    else if (score >= 80 && score <= 89) {
        console.log(`You got a B (${score}%)!`); //logs B if score is between 80 and 89
    }

    else if (score >= 70 && score <= 79) {
        console.log(`You got a C (${score}%)!`); //logs C if score is between 70 and 79
    }

    else if (score >= 60 && score <= 69) {
        console.log(`You got a D (${score}%)!`); //logs D if score is between 60 and 69
    }

    else if (score >= 50 && score <= 59) {
        console.log(`You got an E (${score}%)!`); //logs E if score is between 50 and 59
    }

    else {
        console.log(`You got an F (${score}%)!`); //logs D if score is between 0 and 49
    }
}
let score = 95; //Passed in a value of '30' to variable score
let percentage = (score/100) * 100; //converts the score to a percentage
gradeCalc(score); //Invocation of the declared function 'gradeCalc(score)' 