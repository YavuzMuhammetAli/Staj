import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { CustomTableComponent } from '../../custom-table/custom-table/custom-table.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  users : user[] =[];
  name : any;

  constructor(public rs: UserService) { }

  ngOnInit(): void {
    this.rs.getAllUsers().subscribe((response)=>{
      this.users=response;
    });
  }
  Search(){
    if(this.name==""){
      this.ngOnInit();
      console.log("ifin ilk bloğu");
    } else {
      this.users=this.users.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });

      console.log("ifin 2.bloğu");
    }
  }
}
