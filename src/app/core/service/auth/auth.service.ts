import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.prod';
import { TokenService } from '../../services/token.service';
import { tap } from 'rxjs/operators'; //ejecuta una tarea antes de retornarla
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa:AngularFireAuth, private http: HttpClient , private token: TokenService) { }

  //servicios
  createUser(email:string,password:string)
  {
    return  this.afa.createUserWithEmailAndPassword(email,password); //crea un usuario
  }

  login(email:string,password:string)
  {
    return this.afa.signInWithEmailAndPassword(email,password);
  }
  logout()
  {
    return this.afa.signOut();
  }
  hasUser()
  {
    return this.afa.authState;
  }
  loginRestApi(email: string , password: string)
  {

    return this.http.post(`${environment.url_api}/auth`,{
      email,
      password
    })
    .pipe(
      tap((data: any ) =>{
        const token = data.token;
        this.token.saveToken(token);
      })
    );
  }
}
