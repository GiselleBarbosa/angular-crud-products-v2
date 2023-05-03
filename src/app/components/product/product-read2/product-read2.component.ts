import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatLegacyPaginator as MatPaginator } from "@angular/material/legacy-paginator";
import { MatSort } from "@angular/material/sort";
import { MatLegacyTable as MatTable } from "@angular/material/legacy-table";
import { ProductRead2DataSource } from "./product-read2-datasource";
import { Product } from "./../product.model";

@Component({
  selector: "app-product-read2",
  templateUrl: "./product-read2.component.html",
  styleUrls: ["./product-read2.component.css"],
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name", "price"];

  constructor() {
    this.dataSource = new ProductRead2DataSource();
  }

  ngOnInit() {
    this.dataSource = new ProductRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
