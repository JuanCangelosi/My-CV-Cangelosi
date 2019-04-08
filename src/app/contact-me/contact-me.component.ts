import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../_DTO/contact-form';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ResetFormAction, SaveFormAction } from '../_actions/form.actions';

@Component({
  selector: 'cv-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  public contactForm: FormGroup;
  public storeSubscription: Subscription = new Subscription();

  constructor(private store: Store<{ contactForm: ContactForm }>) {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', Validators.email),
      comment: new FormControl(''),
    }
    );
  }

  ngOnInit() {
    this.storeSubscription.add(
      this.store.subscribe((value) => {
        console.log(value.contactForm);
        this.contactForm.setValue(value.contactForm);
      })
    );
  }

  public sendForm() {
    this.saveForm();
    alert('Se envio con exito el formulario!');
  }

  public resetForm() {
    this.store.dispatch(new ResetFormAction());
  }

  public saveForm() {
    const action = new SaveFormAction();
    action.payload = this.contactForm.value;
    this.store.dispatch(action);
  }

}
