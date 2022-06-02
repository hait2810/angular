import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = {}
  constructor(
    private userService: UserService
  ) { }
  onSignup() {
    this.userService.signUp(this.user).subscribe((data) => {
      
      
    })
    
  }
  ngOnInit(): void {
  }

}
