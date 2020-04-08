import { Component, OnInit } from '@angular/core';
import { Mhs } from '../mhs';
import { DataService } from '../data.service';
import { MhsFormComponent } from '../mhs-form/mhs-form.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  mhs: MhsFormComponent[];
  error:boolean;
  displayedColumns: string[] = ['mhsName', 'smaName', 'domisili', 'tanggal' ,'jurusan'];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getMhs().subscribe(
      Response => {
        this.mhs = Response as MhsFormComponent[];
      },
      err => {
        console.log(err);
        this.error = true;
      }
    );
  }

}
