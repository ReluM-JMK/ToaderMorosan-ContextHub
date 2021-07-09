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
import {EDIT_BRAND } from "../GraphQL/Mutations";


export const EditBrand = (props) => {
    const currentId = props.match.params.id;

    const [name,setName] = useState("");
    const [website,setWebsite] = useState("");
    const [editBrand, {error}] = useMutation(EDIT_BRAND)

    const updateBrand = () =>{
        editBrand({
            variables:{
                name: name,
                website_url: website,
                id: currentId
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
        <Button type="submit" onClick={updateBrand}>Update</Button>
        <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
    </Form>
    )
}
