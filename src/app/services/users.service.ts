import{Injectable}from'@angular/core';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';


@Injectable()
export class UserService  extends APIService{
   
    private resourceUrl: string = 'user/items';
    private users: User[] = [
      new User("","","","Yerry","Mina","http://imagenes.canalrcn.com/ImgDeportes/7nh1nqj.jpeg?i3GuwlVPfE_8ryOo13RA3c3Tu6h89fU")
    ];

  constructor(public config:AppConfiguration,public http:Http,public authService: AuthService ) {
    super(config,http);
  }

  list(): Observable<User[]> {
    return this.get(this.resourceUrl);
  }

  create(username:string,password:string,email:string,name: string, lastName: string, image: string) {
    return this.post(this.resourceUrl,new User(username,password,email,name, lastName, image)); 
  }


  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  userByEmail(url:string){
    return this.get(url);
  }

}
