import { Component, Input, OnInit } from '@angular/core';
import { LocationService ,Position, PositionError} from './location.service'
import * as L from "leaflet";

// interface Doctor {
//   profile: {
//     first_name: string,
//     last_name: string
//   },
//   specialties: {
//     name: string
//   }[],
//   practices: {
//     visit_address: {
//       street: string,
//       city: string,
//       state: string,
//       zip: string
//     },
//     phones: {
//       number: string
//     }[]
//   }[]
// }

@Component({
  selector: 'app-heart-disease-detected',
  templateUrl: './heart-disease-detected.component.html',
  styleUrls: ['./heart-disease-detected.component.css']
})
export class HeartDiseaseDetectedComponent implements OnInit {
  @Input() output = '';
  // doctors: Doctor[] = [];
  map:any

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    // Get user's location
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.showDoctors.bind(this));
    // } else {
    //   alert('Geolocation is not supported by this browser.');
    // }
    this.getCurrentLocation()
    // this.initmap()
  }
  

  // Show nearby doctors
  // showDoctors(position: GeolocationPosition): void {
  //   const lat = position.coords.latitude;
  //   const long = position.coords.longitude;
  //   const apiUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=${lat}%2C${long}%2C10&user_location=${lat}%2C${long}&skip=0&limit=10&user_key=YOUR_API_KEY_HERE`;
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then((data: { data: Doctor[] }) => {
  //       const doctors = data.data;
  //       let doctorListHtml = '';
  //       doctors.forEach((doctor: Doctor) => {
  //         const doctorName = doctor.profile.first_name + ' ' + doctor.profile.last_name;
  //         const doctorSpecialty = doctor.specialties[0].name;
  //         const doctorAddress = `${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}`;
  //         const doctorPhone = doctor.practices[0].phones[0].number;
  //         doctorListHtml += `
  //           <li>
  //             <h3>${doctorName}</h3>
  //             <p>${doctorSpecialty}</p>
  //             <p>${doctorAddress}</p>
  //             <p>${doctorPhone}</p>
  //           </li>
  //         `;
  //       });
  //       const doctorListElement = document.getElementById('doctor-list');
  //       if (doctorListElement) {
  //         doctorListElement.innerHTML = doctorListHtml;
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }
   

    getCurrentLocation() {
      this.locationService.getCurrentLocation().subscribe(
        (position: Position) => {
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
          this.initmap(position.coords.latitude,position.coords.longitude)
        },
        (error: PositionError) => {
          console.error('Error getting location:', error.message);
        }
      );
    }

//     initmap(){
//       this.map=L.map("map",{
//         minZoom:7,
//         maxZoom:18
//       }).setView([ 20.275845,85.7760641 ],15)
      
//       L.tileLayer('http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
//       { maxZoom: 20,
//         maxNativeZoom: 17}).addTo(this.map);
     
// var defaultIcon = L.icon({
//   iconUrl: './assets/images/marker-icon.png',
//   iconAnchor: [12,36],
       
// });

//   L.marker([20.275845,85.7760641], {icon: defaultIcon}).addTo(this.map).bindPopup("OUTR College Bhubaneswar");;
//   L.circle([20.275845,85.7760641], {radius: 1300}).addTo(this.map);

//     }
initmap(lat:any,long:any){
  
  this.map=L.map("map",{
    minZoom:7,
    maxZoom:18
  }).setView([ lat,long ],15)
  
  L.tileLayer('http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
  { maxZoom: 20,
    maxNativeZoom: 17}).addTo(this.map);
 
var defaultIcon = L.icon({
iconUrl: './assets/images/marker-icon.png',
iconAnchor: [12,36],
   
});

L.marker([lat,long], {icon: defaultIcon}).addTo(this.map);
L.circle([lat,long], {radius: 1300}).addTo(this.map);

}
  
  
  }


