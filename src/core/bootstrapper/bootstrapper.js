import {ComponentFactory} from 'core/component-factory/component-factory';
import {RouteEngine} from 'core/routing/route';
import {Store} from 'core/store/store';
import * as Templates from 'lib/templates';

// Import of components
import AppComponent from 'app/app.component';
import CuisineFilterComponent from 'app/cuisine/cuisine-filter.component';
import NeighborhoodFilterComponent from 'app/neighborhood/neighborhood-filter.component';
import HeaderComponent from 'app/header/header.component';
import NavigationComponent from 'app/navigation/navigation.component';
import FiltersComponent from 'app/filters/filters.component';
import MapComponent from 'app/map/map.component';
import ResultsComponent from 'app/results/results.component';
import RestaurantPreviewComponent from 'app/restaurant/preview/restaurant-preview.component';
import HomeComponent from 'app/home/home.component';
import RouterComponent from 'core/routing/router.component';
import RestaurantComponent from 'app/restaurant/restaurant.component';
import ReviewComponent from 'app/review/review.component';
import FooterComponent from 'app/footer/footer.component';
import ReviewListComponent from 'app/review-list/reviewList.component';

/**
 * Bootsrapper of the application
 * @param {string} entrypoint
 * @return {Promise}
*/
export default function bootstrap(entrypoint) {
    ComponentFactory.components = [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        NavigationComponent,
        FiltersComponent,
        CuisineFilterComponent,
        NeighborhoodFilterComponent,
        MapComponent,
        ResultsComponent,
        RestaurantPreviewComponent,
        RouterComponent,
        RestaurantComponent,
        ReviewComponent,
        FooterComponent,
        ReviewListComponent,
    ];

    return Store.open().then(() => {
        return ComponentFactory.startup(entrypoint).then(()=>{
            RouteEngine.initialize(process.env.BASEURL);

            let promise = new Promise((resolve)=>{
                document.addEventListener('HINTEAT:FIRSTLOAD', () => {
                    resolve();
                });
            });

            return promise;
        });
    });
}
