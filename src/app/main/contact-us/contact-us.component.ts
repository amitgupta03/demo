import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fuseAnimations } from '@fuse/animations';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: fuseAnimations
})
export class ContactUsComponent implements OnInit {

  constructor(private _FormBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }
  contactForm: FormGroup;
  ngOnInit(): void {
  this.initForm();
  }

  initForm(){
    this.contactForm = this._FormBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
      subject: ['', [Validators.required]],
      query: ['', Validators.required]
    })
  }
  submitFrom(): void {
    if (this.contactForm.valid) {
      this._snackBar.open("We will reach you soon", "OK", {
        duration: 2000,
      });
      //this.contactForm.reset();
      this.initForm();
    }
  }
}


