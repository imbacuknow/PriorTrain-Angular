import {MatTableDataSource} from '@angular/material/table';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  mockData: any[] = [
    {position: 1, username: 'test1', password: '1234'},
    {position: 2, username: 'test2', password: '1234'},
  ];
  @Input() dataSource = new MatTableDataSource<[]>(this.mockData);
  displayedColumns: string[] = ['position', 'username', 'password'];

  constructor() {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(mockData);
  }
}
