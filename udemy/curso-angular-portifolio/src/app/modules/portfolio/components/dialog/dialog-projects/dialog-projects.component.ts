import {Component, Inject, inject, OnInit, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {IProjects} from "../../../interface/IProjects";

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [
    MatDialogContent
  ],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements  OnInit{
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: IProjects) {}

  public getData = signal<IProjects | null>(null)

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal(){
    return this._dialogRef.close()
  }

}
