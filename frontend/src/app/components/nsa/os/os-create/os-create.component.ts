import { Component, OnInit } from '@angular/core';
import { Os } from '../os.model';
import { OsService } from '../os.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {
  os: Os = {
    osDescription: '',
    osNumber: ''
  }

  constructor(private osService: OsService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createOs(): void {
    this.osService.create(this.os).subscribe(() => {
      this.osService.showMessage('Os criada!')
      this.router.navigate(['/oss'])
    })

  }

  cancel(): void {
    this.router.navigate(['/oss'])
  }
}