/**
 * Test skenarion untuk usersReducer
 * 
 * - Harus mengembalikan inisial state ketika menirima aksi yang tidak diketahui
 * - Harus mengembalikan users ketika menerima aksi RECEIVE_USERS
 * - Harus mengembalikan users dan user baru ketika menerima aksi ADD_USERS
 */

import { describe, it, expect } from "vitest";
import usersReducer from './reducer'
import { ActionType } from "./action";

describe('Test skenarion untuk usersReducer', () => {
    it('Harus mengembalikan inisial state ketika menirima aksi yang tidak diketahui', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual(initialState)
    })

    it('Harus mengembalikan users ketika menerima aksi RECEIVE_USERS', () => {
        const initialState = [];
        const action = {
            type: ActionType.RECEIVE_USERS,
            payload: {
                users: [
                    {
                        id: 'user-1',
                        name: 'user 1',
                        email: 'user1@test.id',
                    },
                    {
                        id: 'user-2',
                        name: 'user 2',
                        email: 'user2@test.id',
                    }
                ]
            },
        };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual(action.payload.users);
    })

    it('Harus mengembalikan users dan user baru setelah di filter ketika menerima aksi ADD_USERS', () => {
        const initialState = [
            {
                id: 'user-1',
                name: 'user 1',
                email: 'user1@test.id',
            },
            {
                id: 'user-2',
                name: 'user 2',
                email: 'user2@test.id',
            }
        ];

        const action = {
            type: ActionType.ADD_USERS,
            payload: {
                user: {
                    id: 'user-1',
                    name: 'user 1',
                    email: 'user1@test.id',
                }
            },
        };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual([...(initialState.filter((users) => users.id !== action.payload.user.id)), action.payload.user])
    })
})