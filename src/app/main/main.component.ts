import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations   : fuseAnimations
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}