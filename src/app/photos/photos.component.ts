import { Component, OnInit,Input } from '@angular/core';
import { Photos } from '../classes/photos';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
    @Input() id:any;
    photos?:Photos[];
  constructor(private photosService:PhotosService) { }

  ngOnInit(): void {
    this.getoneuser();
    console.log(this.photos);
  }

  getoneuser(){

    this.photosService.getoneuser(this.id).subscribe(data =>{
      this.photos=data.reverse();

      console.log(this.photos);
    })
  }


}

