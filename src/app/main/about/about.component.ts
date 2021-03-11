import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations   : fuseAnimations
})
export class AboutComponent implements OnInit {
  
  constructor(private route: Router,private _fuseSidebarService: FuseSidebarService   ) { }

  ngOnInit(): void {
 
  }

  toggleSidebarOpen(key): void
  {
      this._fuseSidebarService.getSidebar(key).toggleOpen();
  }
}
