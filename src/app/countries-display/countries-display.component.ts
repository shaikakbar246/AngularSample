import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator,} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CountriesDisplayService } from './countries-display.service';
import { Countries } from '../core/modules/openapi';
import { CommonModule } from '@angular/common';
import { ListColumn } from '../core/modules/openapi/model/list-column.model';
import { MaterialModule } from '../shared/shared.module';
import { MatSort,Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface PeriodicElement {
  code?: string;
  createdAt?: string;
  createdBy?: string;
  id?: string;
  isActive?: string;
  name?: string;
  oid?: string;
  saqaCode?: string;
  sarsCode?: string;
}

@Component({
  selector: 'app-countries-display',
  templateUrl: './countries-display.component.html',
  styleUrls: ['./countries-display.component.scss'],
   standalone: true,
  imports: [MaterialModule],
})
export class CountriesDisplayComponent implements OnInit{
  displayedColumns: string[] = ['code', 'name', 'oid', 'id','saqacode', 'sarscode'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private _liveAnnouncer: LiveAnnouncer){

  }
  ngOnInit() {
    const ELEMENT_DATA: any = [
      {code: 1, name: 'Hydrogen',oid: 'H', id: 2, saqacode: 'H',sarscode: 'H'},
      {code: 11, name: 'Hydrogen',oid: 'H' ,id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 12, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 13, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 15, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 16, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 17, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 18, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 19, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 21, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 22, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
      {code: 20, name: 'Hydrogen',oid: 'H', id: 1.0079, saqacode: 'H',sarscode: 'H'},
    ];
    this.dataSource = new MatTableDataSource <PeriodicElement>();
    this.dataSource =ELEMENT_DATA;
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
