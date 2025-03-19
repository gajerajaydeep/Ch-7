import React, { useState } from 'react'
import Modal, { DeeplyNestedComponent } from './Modal';

export default function TaskD() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
{/* <h1>hello</h1> */}

            <div>
           
                <DeeplyNestedComponent onOpenModal={openModal} />
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <p>This component is at "other-root" level into DOM</p>
                </Modal>
            </div>
        </>
    )
}
