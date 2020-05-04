
import { Component, OnInit } from '@angular/core';
import { Os } from '../os.model';
import { OsService } from '../os.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements OnInit {

  oss: Os[]
  displayedColumns = ['id', 'osDescription', 'osNumber', 'action']
  
  constructor(private osService: OsService) { }

  ngOnInit(): void {
    this.osService.read().subscribe(oss => {
      this.oss = oss
    })
  }

}
