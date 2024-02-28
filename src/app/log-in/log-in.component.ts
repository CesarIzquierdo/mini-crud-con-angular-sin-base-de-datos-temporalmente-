import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginService } from '../login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  constructor(private loginService: loginService){}

  ngOnInit(): void {
      
  }

  login(form:NgForm){
    const email = form.value.email;
    const pass = form.value.password;

    this.loginService.login(email , pass);
  }
}
