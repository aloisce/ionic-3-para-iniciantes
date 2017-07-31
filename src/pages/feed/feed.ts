import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Aluisio Benigno",
    data: "November 5, 1955",
    descricao: "Estou criando um App incrível....",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public nome_usuario:string = "Aluisio Benigno do Mundo";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
      alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
