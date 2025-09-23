export interface UserDto {
  id: string;
  name: string;
  email: string;
}

export interface RegisterRequestDto {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponseDto {
  user: UserDto;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken?: string;
  user: UserDto;
}

export interface ApiErrorDto {
  status: number;
  code?: string;
  message: string;
  details?: Record<string, unknown>;
}


