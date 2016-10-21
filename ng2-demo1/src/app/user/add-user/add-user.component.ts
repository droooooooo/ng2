import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
	  public userName:String;
	  public nickName:String;
	  public alerts:Array<Object> = [];

  	constructor(private router: Router,private route: ActivatedRoute) {

    }

  	ngOnInit() {
  	}

  	public submitForm(f){
  		if(f.form.valid){
  			console.log(f.form.value);
        let newUser=f.form.value;
        let users=[];
        if(window.localStorage.getItem("users")){
          users=JSON.parse(window.localStorage.getItem("users"));
        }
        newUser.userId=users.length+1;
        users.push(newUser);
        window.localStorage.setItem("users",JSON.stringify(users));

  			this.alerts.push({msg: 'Add User Success!', type: 'success', dismissOnTimeout:1000});
        let routerInstance=this.router;
        setTimeout(function(){
          routerInstance.navigateByUrl("/user");
        },1000);
      }else{
  			this.alerts.push({msg: 'Please check the input...', type: 'danger', dismissOnTimeout:1000});
  		}
  	}

  	public addUser(){

  	}
}