import { Component, OnInit } from '@angular/core';
import { Mhs } from '../mhs';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/*
interface JurusanNode {
  name: string;
  children?: JurusanNode[];
}

const TREE_DATA: JurusanNode[] = [
  {
    name: 'Program Studi',
    children: [
      {name: 'Akuntansi'},
      {name: 'Ilmu Administrasi Bisnis'},
      {name: 'Ilmu Komunikasi'},
      {name: 'Manajemen'},
      {name: 'Sistem Informasi'},
      {name: 'Teknik Informatika'}
    ]
  }
]
*/

@Component({
  selector: 'app-mhs-form',
  templateUrl: './mhs-form.component.html',
  styleUrls: ['./mhs-form.component.scss']
})
export class MhsFormComponent implements OnInit {
  mhs: Mhs = {
    _id: '',
    mhsName: '',
    smaName: '',
    jurusan: 'Akuntansi',
    domisili: '',
    tanggal: ''
  };
  id = null;
  error = false;
  update = true;

  constructor(
    private snackBar : MatSnackBar,
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 1000});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // jika ada parameter id di URL
      if (params.get('id')) {
        this.id = params.get('id');

        this.ds.getMhsId(this.id).subscribe(
          response => {
            this.mhs = response as Mhs;
          },
          err => {
            console.log(err);
            this.error = true;
          }
        );
      } else {
        this.update = false;
      }
    });
  }

  postMhs() {
    this.ds.postMhs(this.mhs).subscribe(response => {
      this.openSnackBar("Berhasil Ditambahkan", null)
      this.router.navigate(['/main']);
    });
  }

  deleteMhs() {
    this.ds.deleteMhs(this.mhs).subscribe(
      response => {
        this.openSnackBar("Berhasil Dihapus", null)
        this.router.navigate(['/main']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateMhs() {
    this.ds.updateMhs(this.mhs).subscribe(
      response => {
        this.openSnackBar("Berhasil Diupdate", null)
        this.router.navigate(['/main']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
