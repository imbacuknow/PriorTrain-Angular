import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/core/serivce/api.service';
import {ThrowStmt} from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // data table
  record: any;
  data: any[] = [
    // {
    //   firstname: 'aaaa',
    //   lastname: 'bbbb',
    //   email: 'ab@gmail.com',
    //   mobile: '0912345678',
    // },
    // {
    //   firstname: 'cccc',
    //   lastname: 'dddd',
    //   email: 'cd@gmail.com',
    //   mobile: '0912345678',
    // },
    // {
    //   firstname: 'eeee',
    //   lastname: 'ffff',
    //   email: 'ef@gmail.com',
    //   mobile: '0912345678',
    // },
  ];

  // form group
  form: FormGroup;

  mockData = new MatTableDataSource<[]>(this.data);

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.setFormGroup();
    this.getAllUser();
    // this.getUserById();
  }

  getAllUser() {
    this.apiService.getUserAll().subscribe(
      (res) => {
        console.log(res);
        for (let _res of res) {
          this.data.push(_res);
        }
        this.mockData = new MatTableDataSource<[]>(this.data);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  getUserById() {
    this.apiService.getUserById(3).subscribe(
      (res) => {
        console.log(res);
        this.data.push(res);
        this.mockData = new MatTableDataSource<[]>(this.data);
        console.log(this.data);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  setFormGroup() {
    this.form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
    });
  }

  onSubmit() {
    this.addNewUser();
    // if (this.form.invalid) {
    //   console.log("hello");
    //   return;
    // } else {
    //   console.log(JSON.stringify(this.data));
    //   this.addNewUser();
    //   console.log("------------------");
    //   console.log(JSON.stringify(this.data));
    // }
  }

  addNewUser() {
    if (this.record == null) {
      let _data = {
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        email: this.email.value,
        mobile: this.mobile.value,
      };
      this.data.push(_data);
      this.mockData = new MatTableDataSource<[]>(this.data);
    } else {
      let _recordIndex = this.data.indexOf(this.record);
      this.data[_recordIndex];
      Object.assign(this.data[_recordIndex], 
        {firstname: this.firstname.value},
        {lastname: this.lastname.value},
        {email: this.email.value},
        {mobile: this.mobile.value}
        );
      console.log(this.data[_recordIndex]);
      // reset data register form
      this.record = undefined;
      this.form.setValue({
        firstname: null,
        lastname: null,
        email: null,
        mobile: null
      });
    }
  }

  resetData() {
    this.record = undefined;
    // this.firstname.value;
    // this.lastname.value;
    // this.email.value;
    // this.mobile.value;
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

  setRecord(record: any) {
    this.record = record;
  }
}
