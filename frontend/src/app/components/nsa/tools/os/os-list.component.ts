import { Component, OnInit, Input } from "@angular/core";
import { OsFatherService } from '../../os-father/os-father.service';
import { OsFather } from '../../os-father/os-father.model';

@Component({
  selector: "os-list",
  templateUrl: "os-list.component.html",
  styleUrls:["os-list.component.css"]
})
export class OsListComponent implements OnInit {
  public osNumber: string;
  public description: string;
  public isReleasedToUse: boolean;
  os_father;
  osfather_title;

  @Input()
  public os: OsFather[];

  constructor(private service: OsFatherService) {
    }

  ngOnInit(): void {
    this.service.read()
      .subscribe(dados => this.os =  dados);
  }

  editInfo(educationInfo) {
    this.os_father = educationInfo.osNumber;
    this.osFatherChangeAction(this.os_father);
  }
  osFatherChangeAction(osfather) {
    console.log(osfather);
    this.osfather_title="";
    let dropDownData = this.os.find((data: any) => data.osNumber === osfather);
    if (dropDownData) {
      this.osfather_title = dropDownData.osDescription;
      
    } else {
      this.osfather_title = 'teste';
    }

  }


}
