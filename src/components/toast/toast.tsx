import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
toast.configure({
    autoClose: 2000,
    draggable: false,
  });


export const successToast = (message: string) => toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  });

export const errorToast = (message: string) => toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  });