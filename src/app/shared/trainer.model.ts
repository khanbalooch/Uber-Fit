export class Trainer {

    /* production model */
    /*
    private Bio: string;
    private FirstName: string;
    private Gender: string;
    private ID: string;
    private IsActive: boolean;
    private LastName: string;
    private PictureUrl: string;
    private Rating: string;
    private Type: string;
    private Zip: string;
    private bio: string;
    private firstName: string;
    private gender: string;
    private id: string;
    private isActive: boolean;
    private lastName: string;
    private pictureUrl: string;
    private rating: string;
    private type: string;
    private zip: string;
    constructor(){

    }
    */
/* Development Model */
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