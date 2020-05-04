import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-os-father-crud',
  templateUrl: './os-father-crud.component.html',
  styleUrls: ['./os-father-crud.component.css']
})
export class OsFatherCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de OSs Pai',
      icon: 'storefront',
      routeUrl: '/ossfather'
    }
  }

  ngOnInit(): void {
  }

  navigateToOsFatherCreate(): void {
    this.router.navigate(['/ossfather/create'])
  }

}
