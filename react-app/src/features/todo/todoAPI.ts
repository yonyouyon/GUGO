import {
    ITask
} from "./interfaces";

import {sendPostOnURL} from "../../utils/webUtils"
import {IAPIAnswer} from "../../utils/webInterfaces";

const todoAPI_URL = 'http://localhost:5000/todoapi'


export const todoAPI = {
    getCompletedTasks: () => {
        return sendPostOnURL<ITask[]>(todoAPI_URL + '/completed_tasks');
    },
    getIncompletedTasks: () => {
        return sendPostOnURL<ITask[]>(todoAPI_URL + '/incompleted_tasks');
    },
    sendAddTask: (data: { name: string, description: string }) => {
        return sendPostOnURL<IAPIAnswer>(todoAPI_URL + '/add_task', data);
    },
    sendDeleteTask: (data: { _id: string }) => {
        return sendPostOnURL<IAPIAnswer>(todoAPI_URL + '/delete_task', data);
    },
    sendCompleteTask: (data: { _id: string }) => {
        return sendPostOnURL<IAPIAnswer>(todoAPI_URL + '/compete_task', data);
    }
}
