import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExample';

  videos = [
    {title: 'My Video 3', share: 315, likes: 105, dislikes: 12, thumbnail:'assets/images/image3.jpg'},
    {title: 'My Video 1', share: 415, likes: 257, dislikes: 12, thumbnail:'assets/images/image1.jpg'},
    {title: 'My Video 2', share: 215, likes: 325, dislikes: 12, thumbnail:'assets/images/image2.jpg'},    
  ]

    mostLikedVideo = this.getmostlikedVideo();

    getmostlikedVideo(){
      let videoCopy = [...this.videos];
      return videoCopy.sort((curr,next) => next.likes - curr.likes)[0];
    }

}
