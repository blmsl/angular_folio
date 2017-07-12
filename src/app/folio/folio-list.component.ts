import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, state, style, group } from '@angular/animations';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouteCommsService } from '../shared/route-comms.service';
import { fade, duration, staggerChildren, slide } from '../shared/animations';

import { FolioService } from './folio.service';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [
    trigger('listAnim', [
      transition(':enter', useAnimation(fade, {params: { from: 0, to: 1 }})),
      transition(':leave', useAnimation(fade, {params: { from: 1, to: 0 }})),
      transition('out=>in', useAnimation(staggerChildren)), // staggers entry
    ]),
    trigger('listInner', [
      state('in', style({ width: '100%', height: '320px' })),
      state('out', style('*')),
      transition('*=>*', useAnimation(duration)),
    ]),
    trigger('projectDetail', [
      transition(':enter', group([
        useAnimation(slide, {params: { from: 'translateY(-40px)'}}),
        useAnimation(fade, {params: { from: 0, to: 1 }}),
      ])),
      transition(':leave', useAnimation(fade, {params: { from: 1, to: 0 }})),
    ])
  ],
})
export class FolioListComponent implements OnInit {
  @ViewChild('listContainer') container: ElementRef;

  projects;
  scrollPos = 0;

  filters = ['all', 'work', 'play'];
  category = 'all';

  constructor(
    private route: ActivatedRoute,
    private folioService: FolioService,
    private routeCommsService: RouteCommsService,
  ) { }

  filterProjects({key = 'cat', value}) {
    if (key === 'cat') {
      this.category = value;
    }

    this.projects = this.folioService.getFilteredList({ key, value });

    this.projects.forEach((project, n) => {
      project.computed = {
        style: { transform: `translateY(${n * 256}px)`, 'transition-delay': `${n * 50}ms` },
        active: 'out',
      };
    });
  }

  setActive(slug) {
    this.filterProjects({ key: 'slug', value: slug });
    const project = this.projects[0];
    project.computed.active = 'in';
  }



  setCategory(category) {
    const project = this.projects[0];
    project.computed.active = 'out';
    this.filterProjects({ value: category });
  }

  updateFilter(paramMap) {
    this.scrollTo(0);

    switch (true) {
    case (paramMap.has('project')):
      return this.setActive(paramMap.get('project'));
    case (paramMap.has('category')):
      return this.setCategory(paramMap.get('category'));
    default:
      return this.setCategory('all');
    }
  }

// inspired by https://twitter.com/johnlindquist/status/735172526083440642?lang=en
   // todo bonus = set this up as service? not needed but better organised
  scrollTo(to) {
    const from = this.container.nativeElement.scrollTop;
    // todo maybe set this as variable?
    const multiplier = .2;

    if (Math.abs(from - to) < 1) {
      return false;
    }

    const lerp = (start, finish) => ((1 - multiplier) * start) + (multiplier * finish);
    this.scrollPos = lerp(from, to);

    requestAnimationFrame(() => this.scrollTo(to));
  }

// http://slides.yearofmoo.com/ng4-animations-preview/demo/

  ngOnInit() {

    this.routeCommsService.emit({ sidebarState: 'closed', currentPage: 'folio' });

    this.filterProjects({value: 'all'});

    this.route.paramMap.subscribe(paramMap => this.updateFilter(paramMap));

  }


}
