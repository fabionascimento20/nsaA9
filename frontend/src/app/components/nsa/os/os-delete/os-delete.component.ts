import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Os } from '../os.model';
import { OsService } from '../os.service';

@Component({
  selector: "app-os-delete",
  templateUrl: "./os-delete.component.html",
  styleUrls: ["./os-delete.component.css"],
})
export class OsDeleteComponent implements OnInit {
  os: Os;

  constructor(
    private osService: OsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.osService.readById(id).subscribe((os) => {
      this.os = os;
    });
  }

  deleteOs(): void {
    this.osService.delete(this.os.id).subscribe(() => {
      this.osService.showMessage("Os excluida com sucesso!");
      this.router.navigate(["/oss"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/oss"]);
  }
}
