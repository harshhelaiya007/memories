import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import PopUp from '../PopUp/PopUp';
import { v4 as uuid } from 'uuid';

function ClusterCompo() {
    const [formData, setFormData] = useState({
        id: uuid(),
        title: "",
        subTitle: "",
        message: "",
        image: ""
    });
    const [popUp, setPopup] = useState(false);
    const [isEiditing, setIsEiditing] = useState(false);
    const [editId, setEditId] = useState([]);
    const [memories, setMemories] = useState([]);

    const openPopUp = () => {
        setPopup(true);
    }

    const closePopup = () => {
        setPopup(false);
    }

    useEffect(() => {
        const getData = () => {
            axios.get('https://react-curd.onrender.com/getMemories').then(async (res) => {
                const data = await res.data;
                setMemories(data);
            }).catch((err) => {
                console.log(err);
            });
        }
        getData();
    }, []);

    return (
        <>
            <div className='container'>
                <Navbar props={{ setPopup, openPopUp }} />
                <Cards props={{ memories, setMemories, formData, setFormData, setPopup, setIsEiditing, setEditId }} />
                <PopUp props={{ popUp, setPopup, formData, setFormData, closePopup, memories, setMemories, isEiditing, editId }} />
            </div>
        </>
    )
}

export default ClusterCompo