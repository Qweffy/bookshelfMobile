
export interface LoginResponse {
    usuario: Usuario;
    token:   string;
}
export interface LoginData {
    correo:   string;
    password: string;
}

export interface Usuario {
    rol:    string;
    nombre: string;
    correo: string;
    uid:    string;
}

export interface SignInRequest {
    correo: string;
    password: string;
}

export interface SignUpRequest {
    nombre: string;
    correo: string;
    password: string;
    rol: string;
}
