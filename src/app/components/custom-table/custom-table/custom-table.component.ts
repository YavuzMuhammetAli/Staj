import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  providers: [DecimalPipe]
})
export class CustomTableComponent implements OnInit {

  @Input() data: any[] = []
  @Input() columns: any[] = []
  @Input() buttontext: string = ''
  @Output() buttonFunction: EventEmitter<any> = new EventEmitter<any>()


  edit:number =-1;
  size: number=5;
  public page = 1;
  public pageSize = 5;

  constructor(private router :Router, private userService:UserService) {   }

  ngOnInit(): void {
    console.log(this.columns)
  }

  buttonEvent(item: any) {
    this.buttonFunction.emit(item)
  }
  Details(user:any): void {
    this.router.navigateByUrl(`/userdetails/${user.id}`).then(r => r.valueOf());
  }

}
