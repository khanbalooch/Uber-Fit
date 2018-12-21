import { Trainer } from './trainer.model';
// id
// name
//imgPath
// experience
// offers
// discription
// rate
// time
// focus

export class trainerService {
    selectedTrainer:Trainer;

    private trainers : Trainer[] = [
        new Trainer(
            '1',
            'Cardio Master',
            '../../assets/images/cardio.jpg',
            '5 Years',
            'Chrismis Offer',
            'disApart from being a certified Personal trainer through the American Council on Exercise.Erwin is also a fully qualified physiotharapist and a master Rehab traine. With his background.cription',
            '$40',
            '1 hr',
            'Yoga'

        ),
        new Trainer(
            '2',
            'Mr. John',
            '../../assets/images/cf.jpg',
            '3 Years',
            'Exclusive Offer',
            'Apart from being a certified Personal trainer through the American Council on Exercise.Erwin is also a fully qualified physiotharapist and a master Rehab traine. With his background.',
            '$50',
            '1.5 hr',
            'Cross Fit'

        ),
        new Trainer(
            '3',
            'Kerry Hill',
            '../../assets/images/swt.png',
            '1 Years',
            'Limited Time Offer',
            'Apart from being a certified Personal trainer through the American Council on Exercise.Erwin is also a fully qualified physiotharapist and a master Rehab traine. With his background.',
            '$100',
            '0.5 hr',
            'Weight Loosing'

        ),
        new Trainer(
            '4',
            'name 4',
            '../../assets/images/wt.jpg',
            '2 Years',
            'Monthly Offer',
            'Apart from being a certified Personal trainer through the American Council on Exercise.Erwin is also a fully qualified physiotharapist and a master Rehab traine. With his background.',
            '$150',
            '1 hr',
            'Walking and Running'

        )
    ]

    getAllTrainers(){
        return this.trainers.slice();
    }

    getTrainer(id: string){
        var trainers = this.getAllTrainers();
        //console.log(trainers);
        for(var i =0; i< trainers.length; i++){
            
            if(trainers[i].id == id) {
                //console.log(trainers[i]);
                this.selectedTrainer = trainers[i];
                return this.selectedTrainer;
            }
        }
       /* let trainers = this.getAllTrainers();
        return trainers.filter(function(trainer){
            return trainer.id == id;
        });*/
    }


}


