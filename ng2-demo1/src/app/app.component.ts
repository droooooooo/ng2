import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor(){
	  //test data
      let users=[
        {userId:1,userName:'momo',nickName:'大漠穷秋'},
        {userId:2,userName:'momo',nickName:'大漠穷秋'},
        {userId:3,userName:'momo',nickName:'大漠穷秋'},
        {userId:4,userName:'momo',nickName:'大漠穷秋'},
        {userId:5,userName:'momo',nickName:'大漠穷秋'},
        {userId:6,userName:'momo',nickName:'大漠穷秋'},
        {userId:7,userName:'momo',nickName:'大漠穷秋'},
        {userId:8,userName:'momo',nickName:'大漠穷秋'},
        {userId:9,userName:'momo',nickName:'大漠穷秋'},
        {userId:10,userName:'momo',nickName:'大漠穷秋'}
      ];
      window.localStorage.setItem("users",JSON.stringify(users));
	}

	toggle(button){
		console.log(button);
	}
}
