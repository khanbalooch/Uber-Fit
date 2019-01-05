import { FormGroup, FormControl, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';


    export function compareValidator(control: AbstractControl) {
       if (control) {
           const password = <FormControl> control.root.get('password');
           if (password) {
            const sub: Subscription = password.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
                sub.unsubscribe();
            });
                return password.value !== control.value ? {'compare': true} : null;
           }
      }
    }
