import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDTO: LoginDTO): Promise<{
        access_token: string;
    }>;
}
