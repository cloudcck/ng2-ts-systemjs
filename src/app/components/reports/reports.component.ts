import {Component, OnInit} from '@angular/core';
import {ReportDetailSvgComponent} from './report-detail-svg';

@Component({
    moduleId: module.id,
    selector: 'app-reports',
    templateUrl: 'reports.component.html',
    directives: [ReportDetailSvgComponent],
    styleUrls: ['reports.component.css']
})
export class ReportsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
