import { Component, OnInit } from '@angular/core';
import { OsFather } from '../os-father.model';
import { OsFatherService } from '../os-father.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-father-os-create',
  templateUrl: './os-father-create.component.html',
  styleUrls: ['./os-father-create.component.css']
})
export class OsFatherCreateComponent implements OnInit {
  osFather: OsFather = {
    osDescription: '',
    osNumber: ''
  }

  constructor(private osFatherService: OsFatherService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createFatherOs(): void {
    this.osFatherService.create(this.osFather).subscribe(() => {
      this.osFatherService.showMessage('Os Pai criada!')
      this.router.navigate(['/ossfather'])
    })

  }

  cancel(): void {
    this.router.navigate(['/ossfather'])
  }
}