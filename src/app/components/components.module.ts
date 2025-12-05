import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TablaComponent } from './tabla/tabla.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    EnlacesComponent,
    FooterComponent,
    HeaderComponent,
    TablaComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnlacesComponent,
    FooterComponent,
    HeaderComponent,
    TablaComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
