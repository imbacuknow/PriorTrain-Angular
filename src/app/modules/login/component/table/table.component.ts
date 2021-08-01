import {MatTableDataSource} from '@angular/material/table';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  faEdit = faEdit;

  @Input() dataSource = new MatTableDataSource<[]>();
  @Output() recordChange = new EventEmitter();

  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'mobile',
    'name',
    'avatar',
  ];

  constructor() {}

  ngOnInit(): void {}

  editRecord(element: any) {
    this.recordChange.emit(element);
    // console.log(element.id);
  }
}
