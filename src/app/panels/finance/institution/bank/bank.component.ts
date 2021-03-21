import { Component, OnInit } from '@angular/core';
import { Bank } from './bank.model';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
})
export class BankComponent implements OnInit {
  RBC: Bank = {
    id: '',
    logo: 'assets/RBC_Royal_Bank.svg',
    name: 'Royal Bank of Canada',
    description: `The Royal Bank of Canada is a Canadian multinational 
    financial services company and the largest bank in Canada by market 
    capitalization. The bank serves over 16 million clients and has 86,000+ 
    employees worldwide.`,
    type: 'Public',
    traded_as: 'RY',
    isin: 'CA7800871021',
    founded: 'Halifax, Nova Scotia',
    headquarters: 'Toronto, Ontario, Canada',
    key_people: 'David I. McKay',
    services:
      'Retail banking, corporate banking, investment banking, mortgage loans, private banking, wealth management, credit cards, finance and insurance',
    revenue: 46000000000,
    net_income: 9670000000,
    assests_under_management: 660900000000,
    total_assests: 1490000000000,
    number_of_employees: 85000,
    subsidiaries: ['City National Bank', ' RBC Bank', 'Royal Bank of Trinidad and Tobago'],
  };

  banks: Bank[] = [this.RBC];

  constructor() {}

  ngOnInit(): void {}
}
