import { ADDED, ALL_DELETE, DELETED, UPDATED } from "./Action";

export const taskReducer = (state, action) => {
    // Handle different actions to update the task state
    switch (action.type) {
        case ADDED:
            // Add a new task with a generated ID and initialize "favorite" state
            return 

        case UPDATED:
            // Update an existing task
            return 

        case DELETED:
            // Remove a task with the specified ID
            return 

        case ALL_DELETE:
            // Clear all tasks from the state
            return 

        default:
            // Return the state unchanged for unrecognized actions
            return 
    }
};