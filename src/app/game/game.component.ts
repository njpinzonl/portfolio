import { Component, OnInit, TrackByFunction, EventEmitter, Output } from '@angular/core';
import { CustomImage } from '../models/imageCustom.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public columns = 4;
  move1: CustomImage[] = [];
  move2: CustomImage[] = [];
  move1Id: string;
  move2Id: string;
  arrayValues = [];
  showScores = false;
  play = false;

  @Output() playing = new EventEmitter();
  get started() { return this.playing.asObservable(); }

  private imgList: CustomImage[] = [
    { id: 1, name: 'angular', src: '/../assets/img/angular.png', selected: false, clicked: false },
    { id: 2, name: 'javascript', src: '/../assets/img/javascript.jpg', selected: false, clicked: false },
    { id: 3, name: 'c#', src: '/../assets/img/cSharp.png', selected: false, clicked: false },
    { id: 4, name: 'sqlserver', src: '/../assets/img/sqlserver.png', selected: false, clicked: false },
    { id: 5, name: 'css3', src: '/../assets/img/cssTres.png', selected: false, clicked: false },
    { id: 6, name: 'html5', src: '/../assets/img/html.png', selected: false, clicked: false },
    { id: 7, name: 'azure', src: '/../assets/img/azure.png', selected: false, clicked: false },
    { id: 8, name: 'bootstrap', src: '/../assets/img/bootstrap.png', selected: false, clicked: false },
    { id: 1, name: 'angular', src: '/../assets/img/angular.png', selected: false, clicked: false },
    { id: 2, name: 'javascript', src: '/../assets/img/javascript.jpg', selected: false, clicked: false },
    { id: 3, name: 'c#', src: '/../assets/img/cSharp.png', selected: false, clicked: false },
    { id: 4, name: 'sqlserver', src: '/../assets/img/sqlserver.png', selected: false, clicked: false },
    { id: 5, name: 'css3', src: '/../assets/img/cssTres.png', selected: false, clicked: false },
    { id: 6, name: 'html5', src: '/../assets/img/html.png', selected: false, clicked: false },
    { id: 7, name: 'azure', src: '/../assets/img/azure.png', selected: false, clicked: false },
    { id: 8, name: 'bootstrap', src: '/../assets/img/bootstrap.png', selected: false, clicked: false }
  ];

  ngOnInit() {
    this.startGame();
  }
  constructor(private router: Router) { }
  public get table(): CustomImage[][] {
    const rowCount = Math.floor(this.imgList.length / this.columns);
    const remainder = this.imgList.length % this.columns;
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(this.imgList.slice(i * this.columns, (i * this.columns) + this.columns));
    }
    if (remainder) {
      rows.push(this.imgList.slice(this.imgList.length - remainder, this.imgList.length));
    }
    return rows;
  }

  public trackRow: TrackByFunction<CustomImage[]> = (index, item) => {
    return index;
  }

  public trackImage: TrackByFunction<CustomImage> = (index, item) => {
    return item.name;
  }
  turnImage(image, tableId) {
    if (this.play === true) {
      if (image.selected === false) {
        if (this.move1.length === 0) {
          this.move1 = image;
          this.move1Id = tableId;
          this.imgList[this.move1Id].clicked = true;
          const element = document.getElementById(this.move1Id).setAttribute('src', this.move1['src']);
        } else if (this.move2.length === 0 && this.move1 !== image) {
          this.move2 = image;
          this.move2Id = tableId;
          this.imgList[this.move2Id].clicked = true;
          const element = document.getElementById(this.move2Id).setAttribute('src', this.move2['src']);
        }
        if (this.move1['id'] && this.move2['id']) {
          if (this.move1['id'] === this.move2['id'] && this.move1Id !== this.move2Id) {
            const element = document.getElementById(this.move2Id).setAttribute('src', this.move2['src']);
            this.imgList[this.move1Id].selected = true;
            this.imgList[this.move2Id].selected = true;
            this.reviewCards();
            this.resetValues();
          } else {
            setTimeout(() => {
              if (this.move1Id !== '' && this.move2Id !== '') {
              this.imgList[this.move1Id].clicked = false;
              this.imgList[this.move2Id].clicked = false;
                const element = document.getElementById(this.move1Id).setAttribute('src', '/../src/assets/img/memory.png');
                const element2 = document.getElementById(this.move2Id).setAttribute('src', '/../src/assets/img/memory.png');
                this.resetValues();
              }
            }, 300);
          }
        }
      }
    }
  }
  resetValues() {
    this.move1 = [];
    this.move2 = [];
    this.move1Id = '';
    this.move2Id = '';
  }
  reviewCards() {
    let count = 0;
    this.imgList.forEach(element => {
      if (element.selected) {
        count++;
      }
    });
    if (count === 16) {
      this.playing.emit(false);
      const values = sessionStorage.getItem('Score');
      const arrayValuesFormat = [];
      this.arrayValues = values ? values.split(',') : [];
      this.arrayValues.forEach(element => {
        element = element.match(/.{1,2}/g).join(':');
        arrayValuesFormat.push(element);
      });
      this.arrayValues = arrayValuesFormat.slice(0, 3);
      this.showScores = true;
    }
  }
  startGame() {
    this.imgList.sort(function () { return Math.random() - 0.5; });
  }
  reloadGame() {
    this.play = true;
    this.playing.emit(this.play);
    for (let i = 0; i < 16; i++) {
      const restart = document.getElementById(i.toString()).setAttribute('src', '/../src/assets/img/memory.png');
      this.imgList[i].selected = false;
      this.imgList[i].clicked = false;
    }
    this.startGame();
  }
}




