/**
 * test skenario untuk threadsReducer

 * - Harus mengembalikan inisial state ketika menirima aksi yang tidak diketahui
 * - Harus mengembalikan threads ketika menerima aksi RECEIVE_TALKS
 * - Harus mengembalikan threads dan thread baru yang ditambahkan ketika aksi ADD_TALKS

*/

import { describe, it, expect } from "vitest";
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('threadsReducer function', () => {
    it('Harus mengembalikan inisial state ketika menirima aksi yang tidak diketahui', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(initialState)
    })

    it('Harus mengembalikan threads ketika menerima aksi RECEIVE_TALKS', () => {
        const initialState = [];
        const action = {
            type: ActionType.RECEIVE_THREADS,
            payload: {
                threads: [
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
                ]
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.threads);
    })

    it('Harus mengembalikan threads dan thread baru yang ditambahkan ketika aksi ADD_TALKS', () => {
        const initialState = [];
        const action = {
            type: ActionType.ADD_THREAD,
            payload: {
                thread: [
                    {
                        id: 'thread-1',
                        text: 'thread untuk test',
                        user: 'user-1-test',
                        createdAt: '2022-09-22T10:06:55.588Z',
                    },
                ],
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([action.payload.thread, ...initialState]);
        
    })
})
