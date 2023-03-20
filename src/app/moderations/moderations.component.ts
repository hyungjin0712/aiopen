import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';


@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit {

  constructor(private moderations : ModerationsService) { }

  ngOnInit(): void {
  }

  result : string= "";
  sentence : string  = "";

  postCompletition(){

  let myprompt = `moderate a sentence.
  Animal: ${this.sentence}
  Names:`;

    var payload = {
	prompt: myprompt

    }

    this.moderations.postCompletition(payload)
    .subscribe((data: any) => {
	console.log(data);
  this.result = data.choices[0].text;

   });

  }
}

