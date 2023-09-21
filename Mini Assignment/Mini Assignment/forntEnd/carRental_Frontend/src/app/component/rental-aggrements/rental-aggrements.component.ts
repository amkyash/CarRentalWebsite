import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rental-aggrements',
  templateUrl: './rental-aggrements.component.html',
  styleUrls: ['./rental-aggrements.component.css']
})
export class RentalAggrementsComponent {
items:any;
_email:any;
_isAdmin: boolean =false;
  
constructor (private service:ServicesService,private authService:AuthService,private router:Router){
  this._isAdmin =this.authService.getAdminValue(); 
  
  this.service.getUserAggrement().subscribe((_data :any)=>{
  console.log(this.items);
  this.items = JSON.parse(_data);
  
  
});
}

pushStatus(id:number){
  this.service.pushReturn(id).subscribe({next:(response) =>{
  alert("Done");
    this.router.navigate(['aggrement']);
  
  }
    });
}
}
