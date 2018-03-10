import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ContentComponent } from './app-content/content.component';
import { HeaderComponent } from './app-header/header.component';
import { FooterComponent } from './app-footer/footer.component';
import { MenuComponent } from './app-menu/menu.component';
import { CurveContentComponent } from './curve-content/curve-content.component';
import { CurveSettingComponent } from './curve-setting/curve-setting.component';
import { CurveChartComponent } from './curve-chart/curve-chart.component';
import { CurveTableComponent } from './curve-table/curve-table.component';
import { CurveSearchComponent } from './curve-search/curve-search.component';
import { DrawContentComponent } from './draw-content/draw-content.component';
import { DrawPdfComponent } from './draw-pdf/draw-pdf.component';
import { DrawSettingComponent } from './draw-setting/draw-setting.component';
import {RouterModule, Routes} from '@angular/router';
import { CurveSetComponent } from './curve-setting/curve-set/curve-set.component';
import { PointReferenceComponent } from './curve-setting/point-reference/point-reference.component';
import { SystemCurveComponent } from './curve-setting/system-curve/system-curve.component';
import { SelectionComponent } from './curve-search/selection/selection.component';
import { MultiSpeedComponent } from './curve-search/multi-speed/multi-speed.component';
import { ParallelComponent } from './curve-search/parallel/parallel.component';
import { CompletePumpSetComponent } from './draw-setting/complete-pump-set/complete-pump-set.component';
import { BarePumpComponent } from './draw-setting/bare-pump/bare-pump.component';
import { Page404Component } from './page404/page404.component';
import { CurveChartsetComponent } from './curve-chartset/curve-chartset.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/curve-content', pathMatch: 'full' },
  {path: 'curve-content', component: CurveContentComponent},
  {path: 'draw-content', component: DrawContentComponent },
  {path: '**', component: Page404Component },
];

/**
 * , children: [
 {path: '', component: CurveSetComponent, outlet: 'curve-setting'},
 {path: 'point-reference', component: PointReferenceComponent, outlet: 'curve-setting'},
 {path: 'system-curve', component: SystemCurveComponent, outlet: 'curve-setting'}
 ]
 */
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,

    CurveContentComponent,
    CurveSettingComponent,
    CurveChartComponent,
    CurveTableComponent,
    CurveSearchComponent,
    DrawContentComponent,

    DrawPdfComponent,
    DrawSettingComponent,
    CurveSetComponent,
    PointReferenceComponent,
    SystemCurveComponent,
    SelectionComponent,
    MultiSpeedComponent,
    ParallelComponent,
    CompletePumpSetComponent,
    BarePumpComponent,
    Page404Component,
    CurveChartsetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
