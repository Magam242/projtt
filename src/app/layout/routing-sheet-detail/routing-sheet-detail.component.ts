import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-routing-sheet-detail',
  templateUrl: './routing-sheet-detail.component.html',
  styleUrls: ['./routing-sheet-detail.component.css']
})
export class RoutingSheetDetailComponent implements OnDestroy {

  routeSubscription: Subscription;
  id: number;

  routingsheets = [
    {
      id: 1,
      accepted: 'Иванов И. И.',
      lieter: 60,
      gaz: 'A95',
      break: 1,
      relieved: 'Иванов И. И.'
    },
    {
      id: 2,
      accepted: 'Иванов И. И.',
      lieter: 60,
      gaz: 'A95',
      break: 0,
      relieved: 'Иванов И. И.'
    },
    {
      id: 3,
      accepted: 'Иванов И. И.',
      lieter: 60,
      gaz: 'A95',
      break: 2,
      relieved: 'Иванов И. И.'
    }
  ];

  routingsheet: Object;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.routeSubscription = activateRoute.params.subscribe(pars => this.routingsheet = this.getRoutingSheet(+pars['id']));
  }

  getRoutingSheet(id: number): Object {
    for (let i = 0; i < this.routingsheets.length; i++) {
      if ( this.routingsheets[i].id === id ) {
        return this.routingsheets[i];
      }
    }
    this.router.navigate(['/page-not-found']);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
