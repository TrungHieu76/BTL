import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { ThitracnghiemComponent } from './thitracnghiem/thitracnghiem.component';

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    DanhmucmonhocComponent,
    DangkyComponent,
    DoimatkhauComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    ThitracnghiemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'thi', component: ThitracnghiemComponent },
        { path: 'hoidap', component: HoidapComponent },
        { path: 'gopy', component: GopyComponent },
        { path: 'lienhe', component: LienheComponent },
        { path: 'gioithieu', component: GioithieuComponent },
        { path: 'dmk', component: DoimatkhauComponent },
        { path: 'dangky', component: DangkyComponent },
        { path: 'dangnhap', component: DangnhapComponent },
        { path: 'danhmucmh', component: DanhmucmonhocComponent },
        { path: '**', redirectTo: "trangchu", pathMatch: 'full' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
