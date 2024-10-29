import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuotesPage } from './quotes.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: QuotesPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuotesPage]
})
export class QuotesPageModule {}
