import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  Renderer2
} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('video', { read: ElementRef, static: false }) video: ElementRef;
  viewVid = false;
  vid: HTMLVideoElement;

  title = 'WSM SMASH RANKING';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.vid = this.video.nativeElement;
    this.vid.controls = true;
    this.vid.muted = true;
    this.vid.title = 'pakkies';
    this.vid.loop = true;
    this.renderer.setStyle(this.vid, 'height', '0px');
  }

  ngOnChanges() {}

  videoPlay() {
    this.viewVid = !this.viewVid;
    if (this.viewVid === true) {
      this.video.nativeElement.play();
      this.renderer.setStyle(this.vid, 'height', '377.5px');
    } else {
      this.video.nativeElement.pause();
      this.renderer.setStyle(this.vid, 'height', '0px');
    }
  }
}
