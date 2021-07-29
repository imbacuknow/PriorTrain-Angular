import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebook = faFacebookF;

  data: any[] = [
    {position: 1, username: 'log1', password: '1234'},
    {position: 2, username: 'log2', password: '1234'},
  ];

  mockData = new MatTableDataSource<[]>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  setFormGroup() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.setFormGroup();
    this.mockData = new MatTableDataSource(this.data);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      console.log('username:' + this.username.value);
      console.log('password:' + this.password.value);
    }
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
