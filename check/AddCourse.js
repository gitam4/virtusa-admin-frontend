
import React from "react";
import {Input,Form, Container,Button } from "reactstrap";
import {toast,ToastContainer} from 'react-toastify';

const AddCourse=()=>
{
    const addbtn=()=>{
        toast.success("course added")
    }
    const clrbtn=()=>{
        toast.success("course cleared")
    }

    return(
        <div>
        <h1 className="text-center my-3">filling form</h1>
        <Form>
        
        <label for="userid">course id</label>
        <Input type="text" placeholder="enter course id" name="userid" id="userid"></Input>

        <label for="title">course title</label>
        <Input type="text" placeholder="enter course title" name="userid" id="title"></Input>

        <label for="description">course description</label>
        <Input type="textarea" placeholder="enter course description" name="description" id="description" style={
            {height:100}
        }></Input>
        
        </Form>
        <Container>
        <ToastContainer/>
        <Button color="success" onClick={addbtn} >add course</Button>
        <Button color="warning ml-2" onClick={clrbtn} >clear</Button>
        </Container>
        </div>
    )
}

export default AddCourse;