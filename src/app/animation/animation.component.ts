import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'red'
        
      })),
      state('closed',style({
        height:'250px',
        backgroundColor:'blue'
        
      })),
      transition('open=>closed',[
        animate('2s')
      ]),
      transition('closed=>open',[
        animate('2s')
    ])
  ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen= true;

  constructor() { }


  ngOnInit(): void {
  }

  toggle(){
    this.isOpen= !this.isOpen
   }
}
