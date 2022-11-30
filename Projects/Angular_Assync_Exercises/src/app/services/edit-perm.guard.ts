import { LogadoService } from './logado.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditPermGuard implements CanActivateChild {
  constructor(
    private logadoService: LogadoService
  ) {

  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.logadoService.adm) return true

      alert("Você não tem permissão para editar")
      return false;
  }
  
}
