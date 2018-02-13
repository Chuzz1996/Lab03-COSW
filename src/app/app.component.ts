import {Component, ViewChild, Renderer} from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './common/auth.service';
import { UserService } from './services/users.service';
import { User } from './models/user';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  private navForm:FormGroup;
  private searchInput:string='';
  private modalBody:string;

  constructor(private modalService:NgbModal,private authService: AuthService,
      public userService: UserService
   ){
    

    }

  search(modalSearch,){
    this.userService.userByEmail('user/byEmail/'+this.searchInput).subscribe(
      response => {
        this.modalBody="<div>username: "+response.username+"</div><div>email: "+response.email+"</div><div>firstname: "+response.firstname+"</div><div>lastname: "+response.lastname+"</div><div>image: <img src='"+response.image+"' width='150' height='150' /></div>";
      }, error => {
        this.modalBody="<div>No user found with the email address</div>";
        
        
      }
    );
     this.modalService.open(modalSearch);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  signOut() {
    this.authService.signOut();
  }
}
