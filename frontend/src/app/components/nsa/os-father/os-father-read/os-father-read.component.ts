
import { Component, OnInit } from '@angular/core';
import { OsFather } from '../os-father.model';
import { OsFatherService } from '../os-father.service';

@Component({
  selector: 'app-os-father-read',
  templateUrl: './os-father-read.component.html',
  styleUrls: ['./os-father-read.component.css']
})
export class OsFatherReadComponent implements OnInit {

  ossfather: OsFather[]
  displayedColumns = ['id', 'osDescription', 'osNumber', 'action']
  
  constructor(private osFatherService: OsFatherService) { }

  ngOnInit(): void {
    this.osFatherService.read().subscribe(ossfather => {
      this.ossfather = ossfather
    })
  }

}
