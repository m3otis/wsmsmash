import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule, MatToolbar, MatToolbarModule, MatButtonModule, MatSnackBarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
