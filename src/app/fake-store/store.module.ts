import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerProductsComponent } from "./componente/verproducts.component";

@NgModule({
  declarations: [VerProductsComponent],
  imports: [CommonModule],
  exports: [VerProductsComponent]
})
export class StoreModule {}
