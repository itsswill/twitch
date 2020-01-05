import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userServ: UserService) { }

  ngOnInit() {
    this.userServ.getToken().subscribe(this.onceTokenReceived);
  }

  onceTokenReceived(res) {
    localStorage.setItem('token', res.access_token);
    console.log(res);
  }

  getUser() {
    return this.userServ.getUser('itssdakidd').subscribe(this.onceUserReceived);
  }

  onceUserReceived(res) {
    console.log(res);
  }
}
