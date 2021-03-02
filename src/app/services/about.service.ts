import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  info= {
    nom:"med",
    email:"med@gmail.com",
    tel:6543216
  }
  comments=[
      {date: new Date(), message : "A"},
      {date: new Date(), message : "B"},
      {date: new Date(), message : "C"},
  ];
  commentaire={date:null ,message:""};
  constructor() { }


  addComment(C){
    C.date=new Date();
    this.comments.push(C);
    this.commentaire.message="";
  }
  getAllComments(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }
}
