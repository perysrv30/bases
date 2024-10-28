import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmaceuticals',
  templateUrl: './pharmaceuticals.component.html',
  styleUrls: ['./pharmaceuticals.component.css']
})
export class PharmaceuticalsComponent implements OnInit {

  pharmaceuticals: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
