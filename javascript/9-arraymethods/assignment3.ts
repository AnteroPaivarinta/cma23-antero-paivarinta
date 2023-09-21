//A)
interface IGame {
    id:number,
    date: string,
    won: boolean,
    score:number
}
let gamesA: IGame[] = [ { id: 1586948654, date: "2022-10-27", score: 145, won: false },
                { id: 2356325431, date: "2022-10-30", score: 95, won: false },
                { id: 2968411644, date: "2022-10-31", score: 180, won: true },
                { id: 1131684981, date: "2022-11-01", score: 210, won: true },
                { id: 1958468135, date: "2022-11-01", score: 111, won: true },
                { id: 2221358512, date: "2022-11-02", score: 197, won: false },
                { id: 1847684969, date: "2022-11-03", score: 203, won: true } ];

const loseArray = gamesA.filter((value:IGame) => value.won === false);
let arverageLoseArray = loseArray.map((val:IGame) => val.score).reduce((previous:number, current:number) => previous + current)/loseArray.length
console.log('A)', arverageLoseArray)
//B)

const winArray = gamesA.filter((value:IGame) => value.won === true);
let arveragewinArray = loseArray.map((val:IGame) => val.score).reduce((previous:number, current:number) => previous + current)/winArray.length
console.log('B)', arveragewinArray)
