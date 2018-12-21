export class Trainer {
    public id: string;
    public name: string;
    public imgPath: string;
    public experience: string;
    public offers: string;
    public discription: string;
    public rate: string;
    public time: string;
    public focus: string;

    constructor(id: string, name: string, imgPath: string, experience: string, offers: string, discription: string, rate: string, time: string, focus: string) {
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.experience = experience;
        this.offers = offers;
        this.discription = discription;
        this.rate = rate;
        this.time = time;
        this.focus = focus;
    }
}