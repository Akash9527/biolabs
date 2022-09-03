import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceSummaryComponent } from './component/invoice-summary/invoice-summary.component';
import { WaitlistComponent } from './component/waitlist/waitlist.component';
import { InvoiceWaitlistComponent } from './invoice-waitlist/invoice-waitlist.component';

const routes: Routes = [
  {
    path: '', component: InvoiceWaitlistComponent,
    children: [
      { path: '', redirectTo: 'invoice-summary', pathMatch: 'full' },
      { path: 'invoice-summary', component: InvoiceSummaryComponent },
      { path: 'waitlist', component: WaitlistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceWaitlistRoutingModule { }
