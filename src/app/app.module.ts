import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { FormsModule } from '@angular/forms';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import {HttpClientModule} from '@angular/common/http';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ThitracnghiemComponent } from './thitracnghiem/thitracnghiem.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DangkiComponent } from './dangki/dangki.component';
import { from } from 'rxjs';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    DoimatkhauComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    TrangchuComponent,
    ThitracnghiemComponent,
    DangkiComponent,
    QuenmatkhauComponent,
    SuadoitaikhoanComponent,
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'doimatkhau', component: DoimatkhauComponent },
        { path: 'suadoitaikhoan', component: SuadoitaikhoanComponent },
        { path: 'quenmatkhau', component: QuenmatkhauComponent },
        { path: 'dangki', component: DangkiComponent },
        { path: 'thitracnghiem/:Name/:Id', component: ThitracnghiemComponent },
        { path: 'trangchu', component: TrangchuComponent },
        { path: 'hoidap', component: HoidapComponent },
        { path: 'gopy', component: GopyComponent },
        { path: 'lienhe', component: LienheComponent },
        { path: 'gioithieu', component: GioithieuComponent },
        { path: 'dmk', component: DoimatkhauComponent },
        { path: 'dangnhap', component: DangnhapComponent },
        { path: '**', redirectTo: "trangchu", pathMatch: 'full' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
