import {Component, inject} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";


function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUppercase = /[A-Z]/.test(control.value); // ter letra maiscula
    const hasNumber = /[0-9]/.test(control.value); // ter um numero
    if (hasUppercase && hasNumber) {
      return null ; // retorna null e pq esta valido
    }
    return {textValidator: true} // invalido
  }
}


@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})


export class ReactiveFormsComponent {

  // FormBuilder no inject #=>metodo private
  #fb = inject(FormBuilder);

  // FormBuilder no constructor
  // constructor(private _fb: FormBuilder) {
  // }

  public profileForm = this.#fb.group({
    // name: ['',[Validators.minLength(2),Validators.maxLength(5)]],
    // name: ['',Validators.required],
    // name: ['',Validators.email],
    name: ['', [Validators.required,textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJs']
    }),
    myFavoriteFoods: this.#fb.array([['x- tudo']])
  });


  // public profileForm = new FormGroup({
  // name: new FormControl('Ender react'),
  // myStacks: new FormGroup({
  //   front: new FormControl('Angular'),
  //   back: new FormControl('NodeJs')
  // }),
  // myFavoriteFoods : new FormArray([
  //   new FormControl('x- tudo'),
  // ])


  update() {
    this.profileForm.patchValue({
      name: "Maria",
      myStacks: {
        front: "ionic",
        back: "Java"
      }
    })
  }

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);
    myFavoriteFoods.push(addNewFood)
  }

  public submit(){
    console.log(this.profileForm.valid)

    if(this.profileForm.valid){
      console.log(this.profileForm.value)
    }
  }


}
