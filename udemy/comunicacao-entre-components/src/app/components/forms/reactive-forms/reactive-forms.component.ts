import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public profileForm = new FormGroup({
    name: new FormControl('Ender react'),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJs')
    }),
    myFavoriteFoods : new FormArray([
      new FormControl('x- tudo'),
    ])
  });




  update() {
    this.profileForm.patchValue({
      name: "Maria",
      myStacks: {
        front: "ionic",
        back: "Java"
      }
    })
  }

  public addMyFavoriteFoods(newFood:string){
    const  myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const  addNewFood = new FormControl(newFood);
    myFavoriteFoods.push(addNewFood)
  }
}
