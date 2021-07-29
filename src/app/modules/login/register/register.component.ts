import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // data table
  data: any[] = [
    {
      firstname: 'aaaa',
      lastname: 'bbbb',
      email: 'ab@gmail.com',
      mobile: '0912345678',
    },
    {
      firstname: 'cccc',
      lastname: 'dddd',
      email: 'cd@gmail.com',
      mobile: '0912345678',
    },
    {
      firstname: 'eeee',
      lastname: 'ffff',
      email: 'ef@gmail.com',
      mobile: '0912345678',
    },
  ];

  // form group
  form: FormGroup;

  mockData = new MatTableDataSource<[]>(this.data);

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup() {
    this.form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required]
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log("hello");
      return;
    } else {
      console.log(JSON.stringify(this.data));
      this.addNewUser();
      console.log("------------------");
      console.log(JSON.stringify(this.data));
    }
  }

  addNewUser() {
    let _data = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      mobile: this.mobile.value
    }
    this.data.push(_data);
    this.mockData = new MatTableDataSource<[]>(this.data);
  }

  // getter
  get firstname(): FormControl {
    return this.form.get('firstname') as FormControl;
  }
  get lastname(): FormControl {
    return this.form.get('lastname') as FormControl;
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get mobile(): FormControl {
    return this.form.get('mobile') as FormControl;
  }
}