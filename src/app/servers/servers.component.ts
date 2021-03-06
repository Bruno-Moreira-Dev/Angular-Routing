import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serversService: ServersService,
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(): void {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
