import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnomedService {

  constructor(
    private http : HttpClient
  ) { }
  
  getDiagnostico(diagnostico:string){
    return this.http.get('https://browser.ihtsdotools.org/snowstorm/snomed-ct/browser/MAIN/SNOMEDCT-ES/2023-09-30/descriptions?&limit=100&term=$'+ diagnostico +'&active=true&conceptActive=true&lang=spanish&type=900000000000013009&preferredOrAcceptableIn=450828004',
    {headers: {'Content-Type': 'application/json'}
   })
  }
}