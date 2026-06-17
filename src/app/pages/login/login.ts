import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({

  selector: 'app-login',

  standalone: true,

  imports: [

    FormsModule

  ],

  templateUrl: './login.html',

  styleUrl: './login.css'

})

export class Login {

  username = '';

  password = '';

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

  login() {

    this.authService

      .login({

        username: this.username,

        password: this.password

      })

      .subscribe({

        next: response => {

          this.authService.salvarToken(

            response.token

          );

          this.router.navigate([

            '/dashboard'

          ]);

        },

        error: error => {

          console.error(error);

          alert(

            'Usuário ou senha inválidos'

          );

        }

      });

  }

}
