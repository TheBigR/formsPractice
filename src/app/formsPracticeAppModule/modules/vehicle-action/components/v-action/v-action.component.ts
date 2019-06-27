import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { editVactionSelector } from '../../store/vAction.selector';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SubmitForm, UpdateEditVaction } from '../../store/vAction.actions';

@Component({
  selector: 'app-v-action',
  templateUrl: './v-action.component.html',
  styleUrls: ['./v-action.component.scss']
})
export class VActionComponent implements OnInit {

  vActionForm;
  subscriptions: Array<Subscription> = [];
  isEditMode = true;

  editVaction$ = this.store.pipe(
    select(editVactionSelector),
    tap(() => this.vActionForm ? null : this.setVactionForm()),
    tap((vaction) => Object.keys(vaction)
      .filter(key => Boolean(this.vActionForm.controls[key]))
      .forEach(key => this.vActionForm.controls[key].setValue(vaction[key])))
  );

  constructor(private store: Store<any>) { }

  setVactionForm() {
    this.vActionForm =  new FormGroup({
      name: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      vendor: new FormControl(null, Validators.required),
    });
    this.subscriptions.push(
      ...Object.keys(this.vActionForm.controls).map( key =>
        this.vActionForm.controls[key].valueChanges.pipe(
          distinctUntilChanged(),
          tap(value => this.store.dispatch(new UpdateEditVaction({vAction: <any>{[key]: value } })))
        ).subscribe()
      )
    );
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  onSubmitForm() {
    this.store.dispatch(new SubmitForm());
  }

  resetForm() {
    this.vActionForm.reset();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.editVaction$.subscribe()
    );
  }

}
