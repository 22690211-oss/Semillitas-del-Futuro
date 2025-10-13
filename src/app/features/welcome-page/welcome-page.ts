import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css'
})
export class WelcomePage {
  @ViewChild('videobg') videoRef!  : ElementRef
  private videoBackground =  this.videoRef.nativeElement
  private newVideoIndex : number = 0 
  private currentVideoIndex : number = 0
  private path_videos : string[] = [
    'video/sunrise.mp4',
    'video/cascade.mp4'
  ]
  ngAfterViewInit(){
    this.currentVideoIndex = Math.floor(Math.random() * this.path_videos.length)
    this.videoBackground.src = this.path_videos[this.currentVideoIndex] 
    this.videoBackground.play()
  }
  
  onVideoPlay(){
  
  }

  onEndVideo(){
    this.videoBackground.style.opacity = '0'
    setTimeout(()=>{
      do{
        this.newVideoIndex =  Math.floor(Math.random() * this.path_videos.length)
      }while(this.newVideoIndex === this.currentVideoIndex)
      this.currentVideoIndex = this.newVideoIndex
      this.videoBackground.src = this.path_videos[this.newVideoIndex]
      this.videoBackground.load()
      this.videoBackground.play() 
      this.videoBackground.style.opacity = '1'
    },3000)
  }

}
