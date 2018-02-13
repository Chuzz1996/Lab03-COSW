import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  private userForm: FormGroup;
  private userError:string = '';
  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      email:'',
      password:'',
      name: '',
      lastname: '',
      image: ''
    });
  }

  onSubmit() {
    this.userService.create(
      this.userForm.get('username').value,
      this.userForm.get('password').value,
      this.userForm.get('email').value,
      this.userForm.get('name').value,
      this.userForm.get('lastname').value,
      this.userForm.get('image').value
    ).subscribe(response => {
      this.router.navigate(['users']);
    }, error => {
      
      
      this.userError = 'Error agregando usuario: ' + (error && error.message ? error.message : '');
    });
  }

}
