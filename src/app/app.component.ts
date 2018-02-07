import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  usuario: any;

  constructor(private modalService: NgbModal){}

  search(usuario: any, modal){
    this.usuario = usuario;
    this.modalService.open(modal);
  }
}
