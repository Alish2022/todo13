import React, {useEffect, useState} from 'react'
import {TodolistApi} from "../api/todolists-api";
import {debuglog} from "util";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistApi.getTodolists()
            .then(res=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title='REDUX'
        TodolistApi.createTodolist(title)
            .then(res=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId='7f61e77a-9ce8-49f8-a405-bb72336497cd'
        TodolistApi.deleteTodolist(todolistId)
            .then(res=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    let payload={
        todolistId:'26287ce1-30ca-4f51-867b-8708fa14a938',
        title:'HTML'
    }
    useEffect(() => {
        debugger
        TodolistApi.updateTodolist(payload)

            .then(res=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
