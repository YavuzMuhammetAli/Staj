import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() buttontext: string = ''
  @Output() buttonFunction: EventEmitter<any> = new EventEmitter<any>()

  userList: user[] = []
  userColumns: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  updateUser(user: user) {
    this.userList=this.userList.filter(x => x.id !== user.id)
  }

}
