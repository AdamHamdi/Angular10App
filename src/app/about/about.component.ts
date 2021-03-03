import { Component, OnInit } from '@angular/core';
import { AboutService } from './../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 info:{nom:string,email:string,tel:number};
 comments:any[];
 commentaire={date:null,message:""};

  constructor(private aboutService:AboutService) {
    this.info=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();


  }

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
    // utilisation de aboutService
    this.aboutService.addComment(C);
     //pour initialiser le input
    this.commentaire.message="";
     //pour affiche tous les donnees

     this.comments=this.aboutService.getAllComments();
  }



}
