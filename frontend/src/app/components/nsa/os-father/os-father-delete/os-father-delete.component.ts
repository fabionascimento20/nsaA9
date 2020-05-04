import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { OsFather } from '../os-father.model';
import { OsFatherService } from '../os-father.service';


@Component({
  selector: "app-os-father-delete",
  templateUrl: "./os-father-delete.component.html",
  styleUrls: ["./os-father-delete.component.css"],
})
export class OsFatherDeleteComponent implements OnInit {
  osFather: OsFather;

  constructor(
    private osFatherService: OsFatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.osFatherService.readById(id).subscribe((osFather) => {
      this.osFather = osFather;
    });
  }

  deleteOsFather(): void {
    this.osFatherService.delete(this.osFather.id).subscribe(() => {
      this.osFatherService.showMessage("Os Pai excluida com sucesso!");
      this.router.navigate(["/ossfather"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/ossfather"]);
  }
}
