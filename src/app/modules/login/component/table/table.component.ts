import {MatTableDataSource} from '@angular/material/table';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobile'];

  constructor() {}

  ngOnInit(): void {
  }
}
