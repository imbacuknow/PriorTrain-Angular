import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  mockData = new MatTableDataSource<[]>(this.data);

  constructor() {}

  ngOnInit(): void {}
}
