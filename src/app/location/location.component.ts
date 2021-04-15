
// import {Component,Input,OnInit, ViewEncapsulation} from '@angular/core';
// import {Title} from '@angular/platform-browser';
// import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
// import sdk from '@stackblitz/sdk';
// import {} from 'googlemaps';
// import PlaceResult = google.maps.places.PlaceResult;



// @Component({
//   selector: 'app-location',
//   templateUrl: './location.component.html',
//   styleUrls: ['./location.component.css'],
//   encapsulation: ViewEncapsulation.None,
// })


// export class LocationComponent implements OnInit {

//   public appearance = Appearance;
//   public zoom: number;
//   public latitude: number;
//   public longitude: number;
//   public selectedAddress: PlaceResult;

//   public showAsDirective = false;
//   public showAsComponent = true;

//   constructor(private titleService: Title) {
//   }

//   ngOnInit() {
//     this.titleService.setTitle('Location | @angular-material-extensions/google-maps-autocomplete');

//     this.zoom = 10;
//     this.latitude = 52.520008;
//     this.longitude = 13.404954;

//     this.setCurrentPosition();
    
//   }

//   private setCurrentPosition() {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.latitude = position.coords.latitude;
//         this.longitude = position.coords.longitude;
//         this.zoom = 12;
//       });
//     }
//   }

//   onAutocompleteSelected(result: PlaceResult) {
//     console.log('onAddressSelected: ', result);
//   }

//   onAddressSelected(result: PlaceResult) {
//     console.log('onAddressSelected: ', result);
//   }

//   onLocationSelected(location: Location) {
//     console.log('onLocationSelected: ', location);
//     this.latitude = location.latitude;
//     this.longitude = location.longitude;
//   }

// }

import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class locationComponent {

  address: Object;
  establishmentAddress: Object;

  formattedAddress: string;
  formattedEstablishmentAddress: string;

  phone: string;

  constructor(public zone: NgZone) { }

  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }

  getEstablishmentAddress(place: object) {
    this.establishmentAddress = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedEstablishmentAddress = place['formatted_address'];
    this.zone.run(() => {
      this.formattedEstablishmentAddress = place['formatted_address'];
      this.phone = place['formatted_phone_number'];
    });
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  getStreetNumber(place) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }


}
