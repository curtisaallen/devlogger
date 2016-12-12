import { Component } from '@angular/core';
import {FeathersService} from '../../services/feathers.service';
import {Log} from '../../Log';
@Component({
  moduleId: module.id,
  selector: 'logs',
  templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit {
  logs: Array<Log> = [];
  logText: string;
  logDev: string;
  logDate: string;

  constructor(private _feathersService: FeathersService) {
  }

  ngOnInit() {
    this._feathersService.getLogs().subscribe(logs => {
      console.log(logs.data);
      this.logs = logs.data;
    });
  }

  addLog() {
    console.log(this.logText);
    var logDate = new Date();

    var newLog = {
      message: this.logText,
      developer: this.logDev,
      date: logDate
    }

    this._feathersService.addLog(newLog).subscribe(data => {
      this.logs.push({
        _id: data._id,
        message: this.logText,
        developer: this.logDev,
        date: data.date
      });

      this.logText = '';
      this.logDev = '';
    });
  }

  deleteLog(id) {
    console.log(id);
    this._feathersService.removeLog(id).subscribe(data => {
      for(var i = 0; i < this.logs.length; i++) {
          if(this.logs[i]._id == id) {
             this.logs.splice(i, 1);
          }
      }
    });
  }

}
