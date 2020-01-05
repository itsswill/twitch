import { Component, OnInit } from '@angular/core';
import { StreamsService } from '../../services/streams/streams.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  constructor(private streamServ: StreamsService) { }

  ngOnInit() {
    this.streamServ.getToken().subscribe(this.onceTokenReceived);
  }

  onceTokenReceived(res: any) {
    localStorage.setItem('token', res.access_token);
    console.log(res);
  }

  getStreaming() {
   return this.streamServ.getStreams().subscribe(this.onceStreamsReceived);
  }

  onceStreamsReceived(res: any) {
    console.log(res);
  }
}
