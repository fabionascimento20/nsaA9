import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-os-crud',
  templateUrl: './os-crud.component.html',
  styleUrls: ['./os-crud.component.css']
})
export class OsCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de OSs',
      icon: 'storefront',
      routeUrl: '/oss'
    }
  }

  ngOnInit(): void {
  }

  navigateToOsCreate(): void {
    this.router.navigate(['/oss/create'])
  }

}
