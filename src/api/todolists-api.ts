import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '27916828-5074-4c4d-81c5-f4de28700e0a'
    }
})

export const TodolistApi = {
    getTodolists: () => {
        return instance.get<TodoType[]>('/todo-lists')
    },
    createTodolist: (title: string) => {
        return instance.post<any,AxiosResponse<CommonType<{ item: TodoType }>>,{title:string}>
        ('/todo-lists', {title})
    },
    deleteTodolist: (todolistId: string) => {
        return instance.delete<CommonType<{}>>(`/todo-lists/${todolistId}`)
    },
    updateTodolist: (payload: PayloadType) => {
        return instance.put<any,AxiosResponse<CommonType>,{title:string}>
        (`/todo-lists/${payload.todolistId}`, {title: payload.title})
    }
}

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type CommonType<T={}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

type PayloadType = {
    todolistId: string
    title: string
}