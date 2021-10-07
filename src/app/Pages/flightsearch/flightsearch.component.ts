import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class flightsearchComponent implements OnInit {

  constructor(private find:FlightsearchServiceService) { }

  ngOnInit(): void {
  }

  Search = new FormGroup({
    to : new FormControl(''),
    from : new FormControl(''),
    bookingDate : new FormControl('')
  })

searchFlight()
{
  this.find.findFlight(this.Search).subscribe((data)=>{
    alert("success");
},
(error)=>{
  alert(error);
}
  );
}


}
