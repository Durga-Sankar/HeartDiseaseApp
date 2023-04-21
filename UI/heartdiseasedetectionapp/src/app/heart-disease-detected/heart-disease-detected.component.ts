import { Component, Input, OnInit } from '@angular/core';

interface Doctor {
  profile: {
    first_name: string,
    last_name: string
  },
  specialties: {
    name: string
  }[],
  practices: {
    visit_address: {
      street: string,
      city: string,
      state: string,
      zip: string
    },
    phones: {
      number: string
    }[]
  }[]
}

@Component({
  selector: 'app-heart-disease-detected',
  templateUrl: './heart-disease-detected.component.html',
  styleUrls: ['./heart-disease-detected.component.css']
})
export class HeartDiseaseDetectedComponent implements OnInit {
  @Input() output = '';
  doctors: Doctor[] = [];

  constructor() { }

  ngOnInit(): void {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showDoctors.bind(this));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  

  // Show nearby doctors
  showDoctors(position: GeolocationPosition): void {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const apiUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=${lat}%2C${long}%2C10&user_location=${lat}%2C${long}&skip=0&limit=10&user_key=YOUR_API_KEY_HERE`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((data: { data: Doctor[] }) => {
        const doctors = data.data;
        let doctorListHtml = '';
        doctors.forEach((doctor: Doctor) => {
          const doctorName = doctor.profile.first_name + ' ' + doctor.profile.last_name;
          const doctorSpecialty = doctor.specialties[0].name;
          const doctorAddress = `${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}`;
          const doctorPhone = doctor.practices[0].phones[0].number;
          doctorListHtml += `
            <li>
              <h3>${doctorName}</h3>
              <p>${doctorSpecialty}</p>
              <p>${doctorAddress}</p>
              <p>${doctorPhone}</p>
            </li>
          `;
        });
        const doctorListElement = document.getElementById('doctor-list');
        if (doctorListElement) {
          doctorListElement.innerHTML = doctorListHtml;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
