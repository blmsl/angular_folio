//import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
//import {NgStyle} from '@angular/common';


//import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import { ButtonService } from '../shared/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';


@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
//  directives: [ LazyLoadImageDirective ],
//  animations: [
//    trigger('pageView', [
//      state('in', style({transform: 'transform: translateY(0)' })),
//      transition('void => *', [
//        animate('600ms ease-out', keyframes([
//          style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
//          style({opacity: 1, transform: 'translateY(-10%)', offset: 0.7}),
//          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
//        ]))
//      ])
//    ])
//  ],
  styleUrls: ['app/list/list.component.css']
})
export class ListComponent {
  projects: Project[][] = [];
  page: number = 0;

  listPush: string = '';


//  ph: string = 'http://placehold.it/10x10';
//  temp: string = 'https://placekitten.com/300/300';

  constructor(
    private buttonService: ButtonService,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.buttonService.setButtons({
      home: [-7,-1.5],
      about: [9,9],
      folio: [3.2,1.5],
      framer: [3, 1.5,1]
    })
  };

  getProjects(): void {
    this.projectService.getProjects()
    .then(projects => {
      while (projects.length > 0) {
        console.log(this);
        this.projects.push(projects.splice(0, 6));
      }
    });
  }

  pageUp(): void {
    console.log(this.page);
    this.page = (this.page + 1) % this.projects.length;
  }




//  setTilePos(project : Project) {
//    project.tilePos = {
//      'background-image' : `url(app/lib/${project.img.name})`,
//      'background-position' : project.img.centre
//    }
//    return project;
//  }

  ngOnInit(): void {
    this.getProjects();
  }

  goTo(project: Project): void {
    this.listPush = 'push';
    setTimeout(() =>this.router.navigate(['/work', project.id]), 600);

  }


}
