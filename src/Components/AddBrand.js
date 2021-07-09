import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {useMutation} from '@apollo/client';
import {ADD_BRAND } from "../GraphQL/Mutations";

export const AddBrand = () => {
    const [name,setName] = useState("");
    const [website,setWebsite] = useState("");
    const [addNewBrand, {error}] = useMutation(ADD_BRAND)

    const createBrand = () =>{
        addNewBrand({
            variables:{
                name: name,
                website_url: website
            }
        })
    }
    if(error){
        console.log(error);
    }

    return (
        <Form>
            <FormGroup>
                <Label> Name</Label>
                <Input type="text" placeholder="Enter Name" onChange={(e) => {
                    setName(e.target.value);
                }}></Input>
                <Input type="text" placeholder="Enter Website Url" onChange={(e) => {
                    setWebsite(e.target.value);
                }}></Input>
            </FormGroup>
            <Button type="submit" onClick={createBrand}>Submit</Button>
            <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
        </Form>
    )
}
