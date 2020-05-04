
import { Router, ActivatedRoute } from "@angular/router";

import { Component, OnInit } from "@angular/core";
import { OsService } from '../os.service';
import { Os } from '../os.model';

@Component({
  selector: "app-os-update",
  templateUrl: "./os-update.component.html",
  styleUrls: ["./os-update.component.css"],
})
export class OsUpdateComponent implements OnInit {
  os: Os;

  constructor(
    private osService: OsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.osService.readById(id).subscribe((os) => {
      this.os = os;
    });
  }

  updateOs(): void {
    this.osService.update(this.os).subscribe(() => {
      this.osService.showMessage("Os atualizada com sucesso!");
      this.router.navigate(["/oss"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/oss"]);
  }
}
