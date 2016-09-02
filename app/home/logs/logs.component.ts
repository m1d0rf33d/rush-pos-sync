import {Component, OnInit} from '@angular/core';
import {LogsService} from '../logs/logs.service';
import {LoadingContainer, LoadingPage} from '../../spinner/loading_container';

@Component({
    moduleId: module.id,
    selector: 'app-logs',
    templateUrl: 'logs.component.html',
    providers: [LogsService],
    directives: [LoadingContainer]
})

export class LogsComponent implements OnInit{

    logs:String[];
    loading: boolean = false;

    constructor (private logsService: LogsService) {}

    ngOnInit() {
    //   this.logsService.getLogs('CATALINA_OUT_LOG').subscribe(logs => this.logs = logs.reverse());
    }

    getLogs(logFile,e) {
        this.loading = true;
        e.preventDefault();

        this.logsService.getLogs(logFile).subscribe(data => {
            this.logs = data.reverse();
            this.loading = false;
        },
        error => {
            this.loading = false;
        });

    }

}