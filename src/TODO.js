import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import React, { useState } from 'react'

import { AiOutlineDelete } from "react-icons/ai";
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))



const TODO=({ todo }) => {
    const classes=useStyles();
    const [open, setOpen]=useState(false);
    const [input, setInput]=useState('');

    const handleOpen=() => {
        setOpen(true);
    }
    const handleClose=() => {
        setOpen(false);
    }
    const updateTodo=() => {
        db.collection('Tasks').doc(todo.id).set({
            todo: input
        }, { merge: true });
        handleClose();

    }


    return (
        <div className="App">
            <List className='list'>
                <Modal open={open} onClose={handleClose} >
                    <div className={classes.paper}>
                        <input placeholder={todo.todo} value={input} onChange={(e) => { setInput(e.target.value) }}></input>
                        <Button onClick={updateTodo}>Update TODO</Button>
                    </div>
                </Modal>

                <ListItem>
                    <ListItemText primary={todo.todo} ></ListItemText>
                    <Button style={{ color: "#370031", margin: '-10' }} onClick={handleOpen}>Edit</Button>
                    <Button onClick={() => { db.collection('Tasks').doc(todo.id).delete() }}><AiOutlineDelete />
                    </Button>
                </ListItem>
            </List>
        </div >
    )
}

export default TODO

