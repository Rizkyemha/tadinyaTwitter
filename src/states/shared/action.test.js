/**
 * test skenarion untuk thunk function asyncUsersAndThreads
 * 
 * Harus mengeksekusi penugasan (dispatch) ketika pengambilan data Threads dan Users berhasil
 * Harus mengeksekusi penugasan (dispatch) dan memanggil peringatan ketika pengambilan data Threads dan Users gagal
 */

import { describe, it, expect, beforeEach, afterEach, vi  } from "vitest";
import asyncUsersAndThreads from './action';
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveUsersActionCreator } from "../users/action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const fakeThreadsResponse = [
    {
        id: 'thread-1',
        text: 'thread untuk test',
        user: 'user-1-test',
        createdAt: '2022-09-22T10:06:55.588Z',
    },
    {
        id: 'thread-2',
        text: 'thread untuk test 2',
        user: 'user-2-test',
        createdAt: '2022-09-22T10:06:55.588Z',
    },
];

const fakeUsersResponse = [
    {
        id: 'user-1-test',
        name: 'user 1',
        email: 'user1@test.id',
    },
    {
        id: 'user-2-test',
        name: 'user 2',
        email: 'user2@test.id',
    }
]

const fakeErrorResponse = new Error('Something went wrong');

describe('test skenarion untuk thunk function asyncUsersAndThreads', () => {
    beforeEach(() => {
        api._getThreads = api.getThreads;
        api._getUsers = api.getUsers;
    });

    afterEach(() => {
        api.getThreads = api._getThreads;
        api.getUsers = api._getUsers

        delete api._getThreads;
        delete api._getUsers;
    })

    it('Harus mengeksekusi penugasan (dispatch) ketika pengambilan data Threads dan Users berhasil', async () => {
        api.getThreads = () => Promise.resolve(fakeThreadsResponse);
        api.getUsers = () => Promise.resolve(fakeThreadsResponse);

        const dispatch = vi.fn()

        await asyncUsersAndThreads()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
        
        const filteredUser = fakeThreadsResponse.map((thread) => fakeUsersResponse.filter((users) => users.id === thread.id))
        const expectedFilteredUsers = filteredUser.reduce((acc, curr) => acc.concat(curr), [])

        expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(expectedFilteredUsers));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    })

    it('Harus mengeksekusi penugasan (dispatch) dan memanggil peringatan ketika pengambilan data Threads dan Users gagal', async () => {
        api.getThreads = () => Promise.reject(fakeErrorResponse);
        api.getUsers = () => Promise.reject(fakeErrorResponse);

        const dispatch = vi.fn();
        window.alert = vi.fn();

        await asyncUsersAndThreads()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
})