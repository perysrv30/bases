import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaceuticalsComponent } from './pages/pharmaceuticals/pharmaceuticals.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListComponent } from './components/list/list.component';
import { AddPharmaceuticalsComponent } from './components/add-pharmaceuticals/add-pharmaceuticals.component';
@NgModule({
  declarations: [
    PharmaceuticalsComponent,
    ListComponent,
    AddPharmaceuticalsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports :[PharmacerticalsModule]
})
export class PharmacerticalsModule { }
