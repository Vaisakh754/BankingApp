import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const options={
  withCredentials:true
}
// import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser=""
currentAcc=""
  user:any={
    1000:{acno:1000,uname:"vai",password:"userone",balance:3000,transcation:[]},
    1001:{acno:1001,uname:"sai",password:"usertwo",balance:2000,transcation:[]},
    1002:{acno:1002,uname:"aai",password:"userthree",balance:4000,transcation:[]},
    1003:{acno:1003,uname:"gai",password:"userfour",balance:1000,transcation:[]},
    1004:{acno:1004,uname:"cai",password:"userfive",balance:900,transcation:[]},
  }
  constructor(private http:HttpClient) {
    this.getDetails();
  }
  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.user))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }
  }
getDetails(){
  if(localStorage.getItem("user")){
    this.user=JSON.parse(localStorage.getItem("user")||'')
  }
  

  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
  if(localStorage.getItem("currentAcc")){
    this.currentAcc=JSON.parse(localStorage.getItem("currentAcc")||'')
  }

}
getTranscation(acno:any){
  const data={
    acno
  }
  return this.http.post(environment.apiUrl+"http://localhost:3000/getTranscation",data,options)
}
  
    register(acno:any,uname:any,password:any ){

      const data={
        acno,
        uname,
        password
      }

     return this.http.post(environment.apiUrl+"/register",data)

  //     let accDetails=this.user

  //     if(acno in accDetails){
      
  //       return false;
  //     }
  //     else{
  //       accDetails[acno]={acno,uname,password,balance:0,transcation:[]}
  //     // console.log(this.user)
  //     this.saveDetails();
  //   return true;
  //  }
}
login(acno:any,pswd:any){
const data={
  acno,
  pswd
}

return  this.http.post(environment.apiUrl+'/login',data,options)


//   let accDetails=this.user;
// if(acno in accDetails){
//   if(pswd==accDetails[acno]["password"]){
//     this.currentUser=accDetails[acno]["uname"]
//     this.currentAcc=acno
//     this.saveDetails();
//     return true;
   

//   }
//   else{
//     alert("incorret password")
//     return false;
//   }
// }
// else{
//   alert("invalid user")
//   return false;
// }
}
deposit(acno:any,pswd:any,amt:any){

  const data={
    acno,
    pswd,
    amt
  }
  
  return  this.http.post(environment.apiUrl+'/deposit',data,options)
//   var amount=parseInt(amt)
//   let accDetails=this.user;

//   if(acno in accDetails){
//     if(pswd=accDetails[acno]["password"]){
//       accDetails[acno]["balance"]+=amount
//       accDetails[acno].transcation.push({
//         amount:amount,
//         type:"credit"
//       })
//       this.saveDetails();
//       return accDetails[acno]["balance"]
      
    
//   }
//   else{
//     alert("incorrect password")
//     return false;
//   }
// }
//   else{
//     alert("invalid user")
//     return true;
//   }
}

withdraw(acno1:any,pswd1:any,amt:any){

  const data={
    acno1,
    pswd1,
    amt
  }
  
  return  this.http.post(environment.apiUrl+'/withdraw',data,options)
//   var amount=parseInt(amt)
//   let accDetails=this.user;

//   if(acno1 in accDetails){
//     if(pswd1=accDetails[acno1]["password"]){
//       if(accDetails[acno1]["balance"]>amount){
//       accDetails[acno1]["balance"]-=amount
//       accDetails[acno1].transcation.push({
//         amount:amount,
//         type:"credit"
//       })
//       this.saveDetails();
//       return accDetails[acno1]["balance"]
      
    
//   }
//   else{
//     alert("insufficient balance")
//     return false;
//   }
// }
//   else{
//     alert("incorrect password")
//     return true;
//   }
// }
//  else{
//   alert("invalid user")
//  }
 }
 deleteAcc(acno:any){
   
  return  this.http.delete(environment.apiUrl+'/deleteAcc/'+acno,options)
 }
}