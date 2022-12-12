import { Injectable } from '@nestjs/common';
import { CheckLoginDto } from './checkLogin.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getproduct(): any {
    let tshirtobject;
    tshirtobject = {
      TshirtName: "CR7",
      id: 2,
      country: "Nepal",
      Store: "CR7_npl"
    }
    return tshirtobject; 
  }

  getusers(): any {
    let studentobject; 
    studentobject = {
      Name: "Purab",
      Jilla: "KAlamati", 
      Zip_Code: 1234
    } 

    return studentobject; 
  }

  checkLogin(checkLogin:CheckLoginDto):any {
    const nametoCheck = "PUrab";
    const usernametoCheck = "PUrab1234"; 
    const passwordtoCheck = "PUrab_dai";

    if(nametoCheck == checkLogin.name && usernametoCheck == checkLogin.username && passwordtoCheck == checkLogin.password) {
      return {success: "Name, username and password correct"};
    }  
    else {
      return {success:false}
    }
  } 
}
