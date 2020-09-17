import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { SunbirdPdfPlayerService } from '../sunbird-pdf-player.service';

@Component({
  selector: 'pdf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  @Input() duration?: any;
  @Input() disablePreviousNavigation: boolean;
  time: any;
  pagesCount: number;
  pageNumber: number;
  constructor(public pdfPlayerService: SunbirdPdfPlayerService) {
  }


  ngOnInit() {
    this.pageNumber = 1;
    this.pagesCount = this.pdfPlayerService.totalNumberOfPages;
    if (this.duration) {
    }
  }

  nextSlide() {
    (window as any).PDFViewerApplication.eventBus.dispatch('nextpage');
  }

  prevSlide() {
    if (!this.disablePreviousNavigation) {
      (window as any).PDFViewerApplication.eventBus.dispatch('previouspage');
    }
  }

  zoomIn() {
    (window as any).PDFViewerApplication.zoomIn();
  }

  zoomOut() {
    (window as any).PDFViewerApplication.zoomOut();
  }

  rotateLeft() {
    (window as any).PDFViewerApplication.rotatePages(270);
  }

  rotateRight() {
    (window as any).PDFViewerApplication.rotatePages(90);
  }

  getPage() {
    if (typeof this.pageNumber !== 'number') {
      this.pageNumber = +this.pageNumber;
    }
    (window as any).PDFViewerApplication.page = this.pageNumber;
  }
}
