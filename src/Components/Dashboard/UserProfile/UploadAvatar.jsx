import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";

const UploadAvatar = ({ userId, token, username, avatarUrl, setIsUserUpdated }) => {
    const [modal, setModal] = useState(false);
    const [file, setFile] = useState(null);

    const toggle = () => {
        setModal(!modal);
    };

    const handleFileChange = ({ target: { files } }) => {
        if (files?.length) {
            const { type } = files[0];
            if (type === "image/png" || type === "image/jpg" || type === "image/jpeg") {
                setFile(files[0]);
            } else {
                toast.error("Aceptamos solo imágenes png y jpg", {
                    hideProgressBar: true,
                });
            }
        }
    };

    const updateUserAvatar = async (avatarId, avatarUrl) => {
        try {
            await axios.put(
                `http://localhost:3001/api/users/${userId}`,
                { avatarId, avatarUrl },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setIsUserUpdated(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            toast.error("File is required*", {
                hideProgressBar: true,
            });
            return;
        }
        try {
            const formData = new FormData();
            formData.append("files", file);
            formData.append("name", `${username} avatar`);

            const { data: [{ id, url }] } = await axios.post(`http://localhost:3000/api/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            updateUserAvatar(id, url);
            setFile(null);
            setModal(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button size="sm" onClick={toggle}>
                {`${avatarUrl ? "Change" : "Upload"} picture`}
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {`${avatarUrl ? "Change" : "Upload"} your avatar`}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input
                                type="file"
                                name="file"
                                id="exampleFile"
                                onChange={handleFileChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Upload
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default UploadAvatar;
