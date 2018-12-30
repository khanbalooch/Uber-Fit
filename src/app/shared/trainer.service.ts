import { Injectable } from '@angular/core';
// import { Trainer } from './trainer.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://apps.capbpm.com/UF/api/v1/person";


@Injectable({
    providedIn: 'root'
})
export class trainerService {
    //selectedTrainer: Trainer;
    selectedTrainer: any;
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    getAllTrainers(): Observable<any> {
        return this.http.get(apiUrl, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    setSelectedTrainer(trainer) {
        this.selectedTrainer = trainer;
    }
    getSelectedTrainer() {
        return this.selectedTrainer;
    }


    getTrainerByID(id: string): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    // async getTrainerByID(id: string): Promise<any> {

    //     const url = `${apiUrl}/${id}`;
    //     const data = await this.http.get(url, httpOptions).toPromise();
    //     return data;
    // }

    setTrainerIDOLD(id: any) {
        //this.selectedTrainerId = id;
    }
    getTrainerID_old() {
        // return this.selectedTrainerId;
    }

    getAllTrainersOlder() {
        //return this.trainers.slice();
    }

    getTrainer(id: string) {
        // var trainers = this.getAllTrainers();
        // //console.log(trainers);
        // for (var i = 0; i < trainers.length; i++) {

        //     if (trainers[i].id == id) {
        //         //console.log(trainers[i]);
        //         this.selectedTrainer = trainers[i];
        //         return this.selectedTrainer;
        //     }
        // }
        /* let trainers = this.getAllTrainers();
         return trainers.filter(function(trainer){
             return trainer.id == id;
         });
         */
    }


}


