import { createAction } from "@reduxjs/toolkit";

export const deleteUser = createAction('deleteUser');


//by defining here the action we make extraReducers call slice reducer independently without depended on slice reducer if it do not define in slice then it also work