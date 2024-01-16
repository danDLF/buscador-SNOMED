import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SnomedService } from '../../servicios/snomed.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
  providers:[SnomedService]
})

export class BuscadorComponent {
  diagnostico:string="";

  constructor(
    private snomed : SnomedService
  ){}

  buscar(){
    this.snomed.getDiagnostico(this.diagnostico).subscribe((r)=>{
      console.log(r)
    })
    
  }
}
