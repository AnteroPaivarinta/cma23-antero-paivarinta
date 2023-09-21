const getGrades = (arr:any[]) => {
    return arr.map((val ) => {
        if(val.score < 14.0){
            return 0;
        }
        else if(val.score >= 14.0 && val.score < 17.0){
            return 1;
        }
        else if(val.score >= 17.0 && val.score < 20.0){
            return 2;
        }
        else if(val.score >= 20 && val.score < 23.0){
            return 3;
        }
        else if(val.score >= 23.0 && val.score < 26.0){
            return 4;
        }
        else if(val.score >= 26){
            return 5;
        }
    })
}


const students = [ { name: "Sami", score: 24.75 },
                   { name: "Heidi", score: 20.25 },
                   { name: "Jyrki", score: 27.5 },
                   { name: "Helinä", score: 26.0 },
                   { name: "Maria", score: 17.0 },
                   { name: "Yrjö", score: 14.5  } ];
console.log(getGrades(students));