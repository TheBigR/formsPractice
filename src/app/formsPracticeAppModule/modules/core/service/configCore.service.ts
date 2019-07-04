import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class FEConfigCoreService {
  config: '';

  constructor() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NDlhZmQzNy05NzY1LTQ4N2MtOTE4Ny0wMWE0MzUzODJiYmYiLC' +
      'JpZCI6MTI4MjMsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE5ODk2OTh9.82iSvANJSbUBdzyd3sZc9s7h94W6oYfQ46TPZSPn9Gc';
  }
}
