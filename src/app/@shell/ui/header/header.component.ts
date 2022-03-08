import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { AuthService } from '@pages/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  path = ROUTER_UTILS.config.base;
  returnUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
  ) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ||
      `/${ROUTER_UTILS.config.base.home}`;
  }

  onClickSignIn(): void {
    this.authService.signIn();
    this.router.navigate([this.returnUrl]);
    console.log('SIGNED IN!')
    console.log(this.authService.isLoggedIn);
  }

  onClickSignOut(): void {
    this.authService.signOut();
    this.router.navigate([this.returnUrl]);
    console.log('SIGN OUT!')
    console.log(this.authService.isLoggedIn);
  }
}
