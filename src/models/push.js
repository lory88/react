export default class Push{
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
    }
    posizione(){
        const push = {
            center: {
                latitude: this.lat,
                longitude: this.long,
            },
            options: {
                title: "Posizione",
            },
        }
        return(push);
    }
}
