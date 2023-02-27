import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit{
  states = [
      {title: "Select State"},
      {title: "Alabama"},
      {title: "Alaska"},
      {title: "Arizona"},
      {title: "Arkansas"},
      {title: "California"},
      {title: "Colorado"},
      {title: "Connecticut"},
      {title: "Delaware"},
      {title: "District of Columbia"},
      {title: "Florida"},
      {title: "Georgia"},
      {title: "Hawaii"},
      {title: "Idaho"},
      {title: "Illinois"},
      {title: "Indiana"},
      {title: "Iowa"},
      {title: "Kansas"},
      {title: "Kentucky"},
      {title: "Louisiana"},
      {title: "Maine"},
      {title: "Maryland"},
      {title: "Massachusetts"},
      {title: "Michigan"},
      {title: "Minnesota"},
      {title: "Mississippi"},
      {title: "Missouri"},
      {title: "Montana"},
      {title: "Nebraska"},
      {title: "Nevada"},
      {title: "New Hampshire"},
      {title: "New Jersey"},
      {title: "New Mexico"},
      {title: "New York"},
      {title: "North Carolina"},
      {title: "North Dakota"},
      {title: "Ohio"},
      {title: "Oklahoma"},
      {title: "Oregon"},
      {title: "Pennsylvania"},
      {title: "Rhode Island"},
      {title: "South Carolina"},
      {title: "South Dakota"},
      {title: "Tennessee"},
      {title: "Texas"},
      {title: "Utah"},
      {title: "Vermont"},
      {title: "Virginia"},
      {title: "Washington"},
      {title: "West Virginia"},
      {title: "Wisconsin"},
      {title: "Wyoming"}
  ];
  
  clientForm = new FormGroup({
    name: new FormControl(''),
    // cname: new FormControl(''),
    email: new FormControl(''),
    // phone: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(this.states[0]),
    zip: new FormControl(''),
    pass1: new FormControl(''),
    pass2: new FormControl('')
    });

    constructor(){}

    ngOnInit(): void {
      
    }

    addClientToDB(){
      alert("Saved to Database")
    }
}
