export class Trainer {

    private ID: string;
    private age: number;
    private email: string;
    private firstName: string;
    private gender: string;
    private id: string;
    private isActive: boolean;
    private lastName: string;
    private password: string;
    private pictureURL: string;
    private rating: number;
    private type: string;
    constructor(ID: string, age: number, email: string, firstName: string, gender: string, id: string, isActive: boolean, lastName: string, password: string, pictureURL: string, rating: number, type: string) {
        this.ID = ID;
        this.age = age;
        this.email = email;
        this.firstName = firstName;
        this.gender = gender;
        this.id = id;
        this.isActive = isActive;
        this.lastName = lastName;
        this.password = password;
        this.pictureURL = pictureURL;
        this.rating = rating;
        this.type = type;
    }


    /* Development Model */
    // public id: string;
    // public name: string;
    // public imgPath: string;
    // public experience: string;
    // public offers: string;
    // public discription: string;
    // public rate: string;
    // public time: string;
    // public focus: string;

    // constructor(id: string, name: string, imgPath: string, experience: string, offers: string, discription: string, rate: string, time: string, focus: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.imgPath = imgPath;
    //     this.experience = experience;
    //     this.offers = offers;
    //     this.discription = discription;
    //     this.rate = rate;
    //     this.time = time;
    //     this.focus = focus;
    // }
}