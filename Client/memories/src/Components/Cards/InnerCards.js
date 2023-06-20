import React, { useEffect } from 'react';
import axios from 'axios';

function InnerCards(data) {
    const deleteMemoreis = (el) => {
        const remainingMemoreis = data.sendToInnerData.props.memories.filter((element) => {
            if (data.sendToInnerData.props.memories.length == 1) {
                return element.id !== el.id;
            }
            else {
                return element.id !== el.id;
            }
        });
        const deletedMemories = data.sendToInnerData.props.memories.filter((element) => {
            if (data.sendToInnerData.props.memories.length == 1) {
                return element.id == el.id;
            }
            else {
                return element.id == el.id;
            }
        });
        axios.delete(`https://react-curd.onrender.com/delete/${deletedMemories[0].id}`).then(async (res) => {
            if (res.data.message == "Deleted Memories");
            await data.sendToInnerData.props.setMemories(remainingMemoreis);
        }).catch((err) => {
            console.log(err);
        });
    }


    const editMemories = (el) => {
        data.sendToInnerData.props.formData.title = el.title;
        data.sendToInnerData.props.formData.subTitle = el.subTitle;
        data.sendToInnerData.props.formData.message = el.message;
        data.sendToInnerData.props.setEditId(el.id);
        // data.sendToInnerData.props.formData.image
        data.sendToInnerData.props.setPopup(true);
        data.sendToInnerData.props.setIsEiditing(true);
    }

    return (
        <>
            {

                data.sendToInnerData.props.memories?.length > 0 ? data.sendToInnerData.props.memories.map((el, key) => {
                    return (
                        <>
                            <div className="card mt-5" key={key}>
                                <img className="card-img" src={`${el.image}`} alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">{el.subTitle}</h6>
                                    <h5 className="card-title">{el.title}</h5>
                                    <p className="card-text">{el.message}</p>
                                    <div className='d-flex justify-content-between'>
                                        <button className="card-link" onClick={() => { editMemories(el) }}>Edit</button>
                                        <button className="card-link del" onClick={() => { deleteMemoreis(el) }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }) : <h1 className='nomemories'>No Memories, Create Here</h1>
            }
        </>
    )
}

export default InnerCards