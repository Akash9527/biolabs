import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DefaultDataService } from 'src/app/shared/service/default-data.service';
import { GLOBAL } from 'src/app/shared/utility/config.service';
import { GlobalSponsorService } from '../../sponsorusers/services/global-sponsor.service';

@Component({
  selector: 'app-sponsortab',
  templateUrl: './sponsortab.component.html',
  styleUrls: ['./sponsortab.component.css']
})
export class SponsortabComponent implements OnInit {
  applicationId = '';
  globalSponsorsList: any;
  sitesList: any;
  siteName = 'Eisai';
  indusrtyItems: any;
  constructor(
    private route: ActivatedRoute,
    private globalSponsorService: GlobalSponsorService,
    private defaultDataService: DefaultDataService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.applicationId = params.id;
      }
    });
  }

  getRole() {
    return GLOBAL.USER && GLOBAL.USER.user && GLOBAL.USER.user.role;
  }

}
