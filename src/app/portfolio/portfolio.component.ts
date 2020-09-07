import {Component, OnInit} from '@angular/core';
import {portfolioData} from '../portfolioData';
import {ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  data = portfolioData;
  public show = {};
  public currentModalImg = '';
  public categoryPictures = [];
  public currentPictureIndex = 0;
  public nextPictureIndex = 0;
  public previousPictureIndex = 0;
  private fragment = '';

  constructor(private viewportScroller: ViewportScroller, route: ActivatedRoute) {
    this.fragment = route.snapshot.fragment;
  }

  ngOnInit() {
    for (const contIndex of Object.keys(this.data)) {
      this.show[contIndex] = false;
    }
  }

  showContent(contIndex) {
    this.show[contIndex] = !this.show[contIndex];
  }
  toggleModal(pictureSrc) {
    const pictureNumber = Number(pictureSrc.match(/(\d)/g).join(''));
    const pictureCategory = pictureSrc.match(/assets\/img\/([a-zA-Z]+)/)[1];
    this.categoryPictures = [];
    for (const categoryObj of this.data) {
      if (categoryObj.title.toLowerCase() === pictureCategory) {
        for (const img of categoryObj.content) {
          this.categoryPictures.push(img);
        }
      }
    }
    this.categoryPictures.sort(collator.compare);
    this.currentPictureIndex = pictureNumber - 1;
    this.currentModalImg = pictureSrc;
  }
  flipImages(direction) {
    this.nextPictureIndex =  this.currentPictureIndex + 1;
    this.previousPictureIndex = this.currentPictureIndex - 1;
    if (this.previousPictureIndex < 0) {
      this.previousPictureIndex = this.categoryPictures.length - 1;
      this.nextPictureIndex = 1;
    }
    if (this.nextPictureIndex > this.categoryPictures.length - 1) {
      this.nextPictureIndex = 0;
    }
    if (direction === 'previous') {
      this.currentPictureIndex = this.previousPictureIndex;
    } else if (direction === 'next') {
      this.currentPictureIndex = this.nextPictureIndex;
    }
    this.currentModalImg = this.categoryPictures[this.currentPictureIndex];
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.viewportScroller.scrollToAnchor(this.fragment);
  }
}
