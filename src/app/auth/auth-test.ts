import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UserManager } from 'oidc-client';

@Component({
  template: `
    <button type="button" (click)="signIn()">Sign In</button>
  `
})
export class AuthTestComponent {
  userManager: UserManager = new UserManager({
    authority: 'http://localhost:5000',
    client_id: 'my-client',
    redirect_uri: 'http://localhost:4200/callback.html',
    response_type: 'id_token token',
    scope: 'openid my-api profile',
    post_logout_redirect_uri: 'http://localhost:4200/index.html',
  });

  signIn() {
    this.userManager.signinRedirect();
  }
}
