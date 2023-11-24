import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit{
  
  constructor(private activatedRoute: ActivatedRoute, private service: ProjectService) {
  }

  ngOnInit(): void {
      this.activatedRoute.queryParams.pipe(
        map(params => params["key"]),
        mergeMap(key => this.service.getClientProject(key))
      ).subscribe({
        next: project => {
          console.log(project)
        }
      })
  }
}
