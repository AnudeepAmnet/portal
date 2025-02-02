import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const routes: Routes = [
  {path:'', component: FeedbackComponent, children: [
    {
      path: 'list',
      component: FeedbacksComponent,
    },
    {
      path: '',
      component: FeedbacksComponent,
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
