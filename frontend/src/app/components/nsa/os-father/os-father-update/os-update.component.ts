
import { Router, ActivatedRoute } from "@angular/router";

import { Component, OnInit } from "@angular/core";
import { OsFatherService } from '../os-father.service';
import { OsFather } from '../os-father.model';

@Component({
  selector: "app-os-father-update",
  templateUrl: "./os-update.component.html",
  styleUrls: ["./os-update.component.css"],
})
export class OsFatherUpdateComponent implements OnInit {
  osFather: OsFather;

  constructor(
    private osFatherService: OsFatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.osFatherService.readById(id).subscribe((osFather) => {
      this.osFather = osFather;
    });
  }

  updateOsFather(): void {
    this.osFatherService.update(this.osFather).subscribe(() => {
      this.osFatherService.showMessage("Os Pai atualizada com sucesso!");
      this.router.navigate(["/ossfather"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/ossfather"]);
  }
}
