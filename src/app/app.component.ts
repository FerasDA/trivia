import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia';
  private apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple'
  data: any = [];

  constructor(private http: HttpClient) {
    this.getTrivia();
    this.showTrivia();
  }

  getTrivia() {
    return this.http.get(this.apiUrl);
  }

  showTrivia() {
    this.getTrivia().subscribe(
      data => {
        console.log(data);
        this.data = data;
      }
    )
  }

  nextQuestion() {
    this.getTrivia();
    this.showTrivia();
  }

}
