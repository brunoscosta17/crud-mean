import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
        console.log(res);
      });
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset(form.value);
      this.userService.selectedUser = new User(); 
    }
  }

  addUser(form: NgForm) {
      this.userService.getUsers().subscribe(res => {
        var users = res as User[];
        var found = users.find(user => form.value.email === user.email 
          && user.name !== form.value.name);


        if (found) 
        {
          M.toast({html: 'Já existe um usuário com o email fornecido!'});
          return { status : false };
        } 
        else 
        {
          if (form.value._id){
            this.userService.putUser(form.value)
              .subscribe(res => {
                this.resetForm(form);
                M.toast({html: 'Atualizado com sucesso!'});
                this.getUsers();
              })
          } else {            
              this.userService.postUser(form.value)
                .subscribe(res => {
                  this.resetForm(form);
                  M.toast({html: 'Salvo com sucesso!'});
                  this.getUsers();
                });
          }
        }        
      });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form?: NgForm) {
    if(confirm('Deseja realmente excluir este usuário?')){
      this.userService.deleteUser(_id)
      .subscribe(res => {
        this.getUsers();
        M.toast({html: 'Usuário excluido com sucesso!'});
      });
    }
    this.resetForm(form);
    this.userService.selectedUser = new User();
  }
}
