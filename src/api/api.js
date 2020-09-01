import React from 'react'
import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dd4f0d86-3f33-44a3-801f-a21ec4f91c24"
    },


});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data);
    },


    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`, {})
            .then(response => response.data);
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data);
    }
};
