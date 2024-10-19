// import { SHttpMethod } from "@/types";
// import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

// class HttpService {
//   private http: AxiosInstance;
//   private baseURL = import.meta.env.VITE_APP_BASE_API_URL;

//   constructor() {
//     this.http = axios.create({
//       baseURL: this.baseURL,
//       withCredentials: false,
//       headers: this.setupHeaders(),
//     });
//   }

//   // Initialize service configuration
//   public service() {
//     this.injectInterceptors();

//     return this;
//   }

//   // Set up request headers
//   private setupHeaders(hasAttachment = false) {
//     return hasAttachment
//       ? { "Content-Type": "multipart/form-data" }
//       : { "Content-Type": "application/json" };
//   }

//   // Handle HTTP requests
//   private async request<T>(
//     method: SHttpMethod,
//     url: string,
//     options: AxiosRequestConfig
//   ): Promise<T> {
//     try {
//       const response: AxiosResponse<T> = await this.http.request<T>({
//         method,
//         url,
//         ...options,
//       });

//       return response.data;
//     } catch (error) {
//       return this.normalizeError(error);
//     }
//   }

//   // Perform GET request
//   public async get<T>(
//     url: string,
//     params?: IService.IParams,
//     hasAttachment = false
//   ): Promise<T> {
//     return this.request<T>(SHttpMethod.GET, url, {
//       params,
//       headers: this.setupHeaders(hasAttachment),
//     });
//   }

//   // Perform POST request
//   public async push<T, P>(
//     url: string,
//     payload: P,
//     params?: IService.IParams,
//     hasAttachment = false
//   ): Promise<T> {
//     return this.request<T>(SHttpMethod.POST, url, {
//       params,
//       data: payload,
//       headers: this.setupHeaders(hasAttachment),
//     });
//   }

//   // Perform UPDATE request
//   public async update<T, P>(
//     url: string,
//     payload: P,
//     params?: IService.IParams,
//     hasAttachment = false
//   ): Promise<T> {
//     return this.request<T>(SHttpMethod.PUT, url, {
//       params,
//       data: payload,
//       headers: this.setupHeaders(hasAttachment),
//     });
//   }

//   // Perform DELETE request
//   public async remove<T>(
//     url: string,
//     params?: IService.IParams,
//     hasAttachment = false
//   ): Promise<T> {
//     return this.request<T>(SHttpMethod.DELETE, url, {
//       params,
//       headers: this.setupHeaders(hasAttachment),
//     });
//   }

//   // Inject interceptors for request and response
//   private injectInterceptors() {
//     // Set up request interceptor
//     this.http.interceptors.request.use((request) => {
//       // * Perform an action
//       // TODO: implement an NProgress
//       return request;
//     });

//     // Set up response interceptor
//     this.http.interceptors.response.use(
//       (response) => {
//         // * Do something
//         return response;
//       },

//       (error) => {
//         // * Implement a global error alert
//         return Promise.reject(error);
//       }
//     );
//   }

//   // Normalize errors
//   private normalizeError(error: any) {
//     return Promise.reject(error);
//   }
// }

// export { HttpService as default };
