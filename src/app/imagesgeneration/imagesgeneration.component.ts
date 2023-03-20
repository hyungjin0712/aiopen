import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';


@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent implements OnInit {

  constructor(private imagesgeneration : ImagesgenerationService) { }

  ngOnInit(): void {
  }

  result : string= "";
  pet : string  = "";

  postCompletition(){

  let myprompt = `generate an image of the animal.
  Animal: ${this.pet}
  Names:`;

    var payload = {
	prompt: myprompt,
	n: 1,
  size: "1024x1024"

    }

    this.imagesgeneration.postCompletition(payload)
    .subscribe((data: any) => {
	console.log(data);
  this.result = data.choices[0].images;

   });

  }
}

