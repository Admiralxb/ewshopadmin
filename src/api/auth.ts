import request from "@/utils/request";

// 登录接口
export function login(data: object) {
    return request({
        url: '/api/auth/login',
        method: 'post',
        data
    });
}