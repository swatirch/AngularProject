import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  imgpath:string="./../assets/eat.png";
  imgName:string="Logo";
  constructor() { }

  ngOnInit(): void {
  }

}
