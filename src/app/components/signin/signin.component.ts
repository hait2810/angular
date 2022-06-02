import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:any = {}
  constructor(
    private userService: UserService
  ) { }
    onSignin() {
          this.userService.signIn(this.user).subscribe((data) => {
              localStorage.setItem("user", JSON.stringify(data));
          })
    }
  ngOnInit(): void {
  }

}
