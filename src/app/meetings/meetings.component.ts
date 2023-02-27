import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetingForm = new FormGroup({
    // purpose: new FormControl(''),
    // coordinator: new FormControl(''),
    topic: new FormControl(''),
    people_cnt: new FormControl(0),
    startdate: new FormControl(''),
    enddate: new FormControl(''),
    location: new FormControl(''),
    room: new FormControl(''),
    });

    constructor(){}

    ngOnInit(): void {
      
    }

    addMeetingToDB(){
      alert("Saved to Database")
    }
}
