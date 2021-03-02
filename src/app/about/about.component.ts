import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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

  ngOnInit(): void {
  }
  //premiere maniere

  // onAddCommentaire(){
  //   // pour affecter la date
  //   this.commentaire.date=new Date();
  //   //remplir les donnees de l'input dans un tableau
  //   this.comments.push(this.commentaire);
  //   //pour initialiser le input
  //   this.commentaire={date:null, message:""};
  // }
  //deuxieme maniere 2

  onAddCommentaire(C){
    // pour affecter la date
  console.log(C);
    C.date=new Date();
    //remplir les donnees de l'input dans un tableau
    this.comments.push(C);
     //pour initialiser le input
     this.commentaire.message="";
  }



}
