import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private isAuthenticated =false;
  baseurl = "https://localhost:7187/api/CarRental/";
  isAdminUser = false;

  setAdminValue(value:boolean){
    this.isAdminUser = value;
  }

  getAdminValue(){
    return this.isAdminUser;
  }

  loginUser(loginInfo: Array<any>){
    return this.http.post(this.baseurl + 'LoginUser',{
      Email : loginInfo[0],
      Pswd : loginInfo[1],
      
    },
    {
      responseType:"text",
    });
  }

  rentalSubmit(rentingInfo:Array<any>,carDetails:Array<any>){
    return this.http.post(this.baseurl+'RentalAggrement',{
      Email : sessionStorage.getItem('key'),
      Days : rentingInfo[0],
      VehicleNo : carDetails[0],
      VehicleModel: carDetails[1],
      VehicleMaker: carDetails[2],
      RentalCost : carDetails[3],
      Avaialbility : false,
    })
  }

 
}
