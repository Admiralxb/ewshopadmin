import {defineStore} from "pinia";
import {login, getUserInfo} from "@/api/auth";

// 2. 定义 store 的类型
interface IUserState {
    token: string
    username: string
    avatar_url: string
    permissions: string[]
    info: any
}

export const useUserStore = defineStore({
    // 1. store 的名称
    id: 'app-user',
    state: (): IUserState => ({
        token: localStorage.getItem('token') || '',
        username: '',
        avatar_url: '',
        permissions: [],
        info: {}
    }),


    getters: {
        getToken(): string {
            return this.token;
        },
        getAvatar(): string {
            return this.avatar_url;
        },
        getUserName(): string {
            return this.username;
        },
        getPermissions(): string[] {
            return this.permissions;
        },
    },
    actions: {
        setToken(token: string) {
            // 在本地存储中存储token
            localStorage.setItem('token', token);
            this.token = token;
        },
        setAvatar(avatar_url: string) {
            this.avatar_url = avatar_url;
        },
        setUserInfo(info: object) {
            this.info = info;
        },
        setUserName(username: string) {
            this.username = username;
        },
        setPermissions(permissions: string[]) {
            this.permissions = permissions;
        },
        // 异步的登录方法
        async login(userInfo: object) {// userInfo = params
            try {
                const response: any = await login(userInfo);
                console.log(response)

                if (response.access_token) {
                    this.setToken(response.access_token);
                    // 登录之后，token已经拿到了，然后getUser获取调用,
                    return await this.getUser();
                }
            } catch (error) {
                // console.log(error);
            }
        },
        // 异步的获取用户信息方法
        async getUser() {
            try {
                const response: any = await getUserInfo();
                this.setAvatar(response.avatar_url);
                this.setUserName(response.name);
                this.setUserInfo(response);
                return response;
            } catch (error) {
                // console.log(error);
            }
        }
    }
})