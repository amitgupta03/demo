import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent
{
    date: Date;
    events: any[];
    notes: any[];
    settings: any;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.date = new Date();
        setInterval(() => {
            this.date = new Date();
         }, 1000);

       
       
    }
    ngOnInit(){
        this.events=[{title:"Upcoming Race",detail:"Road Champienship"},{title:"lol",detail:"lollllla"}];
        this.notes=[{title:"Upcoming Race",detail:"Road Champienship"},{title:"lol",detail:"lolllhjkdhfgkhghdfghdfjghdfjghdflla"}];
    }
  

}
