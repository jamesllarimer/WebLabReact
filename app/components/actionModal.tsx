import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import type {ModalArgs} from "~/types";

export default function ActionModal({title, body, submitFunction, cancelFunction, isModalOpen, toggle, submitText, cancelText}: ModalArgs) {

    return (
        <Modal isOpen={isModalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {body}
            </ModalBody>
            <ModalFooter>
                {submitFunction ?
                    <Button color="primary" onClick={submitFunction ?? toggle}>
                        {submitText}
                    </Button> : null
                }
                <Button color="secondary" onClick={cancelFunction ?? toggle}>
                    {cancelText}
                </Button>
            </ModalFooter>
        </Modal>
    );
}