import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common-pop-up',
  templateUrl: './common-pop-up.component.html',
  styleUrls: ['./common-pop-up.component.scss']
})
export class CommonPopUpComponent implements OnInit {
  confirmMessage: string;
  constructor(public dialogRef: MatDialogRef<CommonPopUpComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
