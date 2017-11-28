import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataTable, Column, SelectItem } from 'primeng/primeng';

@Component({
  template: `
  <div class="p-3">
    <p-dataTable [value]="transactions" [paginator]="true" [rows]="10" [pageLinks]="3" [rowsPerPageOptions]="[5,10,20]" #dt>
      <p-column field="date" header="Date" [sortable]="true">
        <ng-template let-col let-transaction="rowData" pTemplate="body">
            {{format(transaction[col.field])}}
        </ng-template>
      </p-column>
      <p-column field="category" header="Category" [filter]="true" [sortable]="true" filterMatchMode="equals">
        <ng-template pTemplate="filter" let-col>
          <p-dropdown [options]="categories" [style]="{'width':'100%'}" (onChange)="dt.filter($event.value,col.field,col.filterMatchMode)" styleClass="ui-column-filter"></p-dropdown>
        </ng-template>
      </p-column>
      <p-column field="label" header="Label" [filter]="true" [sortable]="true"></p-column>
      <p-column field="amount" header="Amount" [sortable]="true"></p-column>
    </p-dataTable>
  </div>
  `
})
export class DataTableComponent implements OnInit {
  transactions: {
    date: Date,
    label: string,
    amount: number,
    category: string
  }[];
  categories: SelectItem[];

  ngOnInit() {
    this.transactions = [
      {
        date: new Date(2017, 10, 10, 13, 10, 15),
        label: 'Third transaction',
        amount: 15,
        category: 'Transport'
      },
      {
        date: new Date(2017, 7, 3, 9, 35, 0),
        label: 'Second transaction',
        amount: 100,
        category: 'Bills'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 90,
        category: 'Transport'
      }
    ];

    this.categories = [
      { label: 'All', value: null },
      { label: 'Bills', value: 'Bills' },
      { label: 'Transport', value: 'Transport' }
    ];
  }

  format(date) {
    return moment(date).format('lll');
  }
}
