import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public teste:string = "";
  constructor() {

  }


  ngOnInit(): void {


  }

  onSubmit(form: NgForm) {

    this.teste = form.value;
  }


}
