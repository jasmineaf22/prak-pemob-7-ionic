import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JokesPage } from './jokes.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: JokesPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JokesPage]
})
export class JokesPageModule {}
