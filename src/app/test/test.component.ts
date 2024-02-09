import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

declare var $: any; 
declare var jQuery: any;
declare var swal: any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  createBillingForm:FormGroup;
  billingDetailsPage:boolean=false;
 constructor(private http: HttpClient, private formBuilder: FormBuilder,
         private router: Router,private ref: ChangeDetectorRef,private app:AppComponent ) {
    // this.app.isActive=true;
     this.billingDetailsPage=true;
     this.createBillingForm = formBuilder.group({
         hideRequired: false,
         floatLabel: 'auto',
       });
 }

 ngOnInit() {
     console.log("billing--");
     setTimeout(()=>{
         $("#outbound-delivery-table").DataTable().destroy();
         $("#outbound-delivery-table").DataTable({
             order: [[1, 'desc']],
             bSort:false,
             bPaginate:false,
             "language": {
                 "emptyTable": "No data available",
                 "info": "Showing page _PAGE_ of _PAGES_", 
                 "infoFiltered": "(filtered from _MAX_ total records)"
               },
               "columnDefs": [ {
                   "targets": 'no-sort',
                   "orderable": false,
             } ],
              "bInfo":false,
              "bFilter":false
         }); 
     },500);
 }
}