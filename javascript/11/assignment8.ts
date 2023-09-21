class WeatherEvent {
    private timestamp:any;
    constructor(x:any){
        this.timestamp = x;
    }
    getInformation(){
        return '';
    }
    print(){
        console.log(this.timestamp + ' '+this.getInformation())
    }
}


class TemperatureChangeEvent extends WeatherEvent {
    private temperature: any;
    constructor(x:any, temp:any){
        super(x);
        this.temperature = temp;
    }
    getInformation(){
        return `temperature: your temperature value ${this.temperature}%`;
    }
}


class WindStrengthChangeEvent extends WeatherEvent {
    private wind: any;
    constructor(x:any, wind:any) {
        super(x);
        this.wind = wind;
    }
    getInformation() {
        return "wind strength: "+this.wind;
    }
}

class HumidityChangeEvent extends WeatherEvent {
    private humidity: any;
    constructor(x:any, humidity:any) {
        super(x);
        this.humidity = humidity;
    }
    getInformation() {
        return "humidity: your humidity value "+this.humidity;
    }
}


const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach(weatherEvent => weatherEvent.print());
// Should print:
// 2022-11-29 03:00 temperature: -6.4°C
// 2022-11-29 04:00 humidity: 95%
// 2022-11-30 13:00 wind strength: 2.2 m/s