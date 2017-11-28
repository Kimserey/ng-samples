import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem } from 'primeng/primeng';
import { BreadcrumbService } from './services/breadcrumb';

@Component({
  template: `
  <p-dataTable [value]="transactions">
    <p-column field="date" header="Date"></p-column>
    <p-column field="label" header="Label"></p-column>
    <p-column field="amount" header="Amount"></p-column>
  </p-dataTable>
  `
})
export class DataTableComponent implements OnInit {
  transactions: {
    date: Date,
    label: string,
    amount: number
  }[];

  constructor(private breadcrumb: BreadcrumbService) {}

  ngOnInit() {
    this.transactions = [
      {
        date: new Date(),
        label: 'ee',
        amount: 130
      },
      {
        date: new Date(),
        label: 'ee',
        amount: 130
      },
      {
        date: new Date(),
        label: 'ee',
        amount: 130
      }
    ];

    this.breadcrumb.setCrumbs([{
        label: 'A'
      }, {
        label: 'B'
      }, {
        label: 'C'
      }]);
    }
  }
}
