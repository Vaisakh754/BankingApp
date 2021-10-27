import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dLogin:Date=new Date()
  // acno=""
  // pswd=""
  // amount=""

  // acno1=""
  // pswd1=""
  // amount1=""

  depositForm=this.fb.group({
     
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9a-zA-Z]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  
   
   })
   withdrawForm=this.fb.group({
     
    acno1:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9a-zA-Z]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  
   
   })
userName:any
acno:any

  //  user=this.ds.currentUser
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    this.userName=localStorage.getItem('userName')
  }

  ngOnInit(): void {
  }

  deposit(){
    if(this.depositForm.valid){
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;

    this.ds.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    
   
}
else{
  alert("invalid form")
}
  }
  withdraw(){
    if(this.withdrawForm.valid){
    var acno1=this.withdrawForm.value.acno1;
    var pswd1=this.withdrawForm.value.pswd1;
    var amount1=this.withdrawForm.value.amount1;

    this.ds.withdraw(acno1,pswd1,amount1)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
   
  }
  else{
    alert("invalid form")
  }
}
DeleteAcc(){
  this.acno=localStorage.getItem("currentAcc")
}
onDelete(event:any){
// alert(event)

this.ds.deleteAcc(event)
.subscribe((result:any)=>{
  if(result){
    alert(result.message)
    this.router.navigateByUrl("")
  }
},
(result)=>{
  alert(result.error.message)
})
}
onCancel(){
this.acno=""
}
}