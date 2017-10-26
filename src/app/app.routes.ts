import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart';

const AppRoutes : Routes = [
  { path: 'cart', component: CartComponent }
];

export const appRoutingProviders : any[] = []
export const routing : ModuleWithProviders = RouterModule.forRoot(AppRoutes);