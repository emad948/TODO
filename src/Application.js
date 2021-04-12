import React, { useState, useEffect } from 'react'
import TODO from './TODO';
import './index.css';
import { IoIosAdd } from "react-icons/io";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
// import { FcOk } from "react-icons/fc"; isharet l97


const Application=() => {
    const [tasks, setTasks]=useState([]);
    const [input, setInput]=useState("");
    useEffect(() => {
        db.collection('Tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // Please Ignore (bmre2 hon object mshan hek 3m 76 2l todo here kan fene mr2o k object bs b3deen bl mapping b76 todo)
            setTasks(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
        })
    }, [])

    const handleChange=(e) => {
        e.preventDefault();
        db.collection('Tasks').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        setInput("");


    }
    return (
        <div className="App">
            <form className="form">
                <FormControl >
                    <InputLabel> Write a TODO </InputLabel>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} />
                </FormControl>
                <Button disabled={!input} onClick={handleChange} type="submit" variant="contained" color="primary"><IoIosAdd /></Button>
            </form>
            <ul>
                {tasks.map((task) => {
                    return (<TODO key={task.id} todo={task} />);
                })}
            </ul>
        </div>
    )
}

export default Application
