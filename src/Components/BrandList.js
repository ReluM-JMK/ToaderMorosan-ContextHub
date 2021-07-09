import React, {useEffect, useState} from 'react'
import { Link} from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import{useQuery, gql} from "@apollo/client";
import {LOAD_BRANDS} from "../GraphQL/Queries";
import {useMutation} from '@apollo/client';
import {REMOVE_BRAND } from "../GraphQL/Mutations";
export const BrandList = () => {

    const { error, loading,data} = useQuery(LOAD_BRANDS);
    const [removeBrand] = useMutation(REMOVE_BRAND);
    const [brands,setBrands] = useState([]);
    const [currentID,setID] = useState("");
    const link = "https://www.google.com/s2/favicons?domain_url="


    useEffect(() => {
        if(data) {
            console.log(data.queryBrand);
            setBrands(data.queryBrand);
        }
        
    }, [data]);


    
    const deleteBrand = () =>{
            removeBrand({
                variables:{
                    id: currentID
                }
            })
    }
    if(error){
        console.log(error);
    }
    

    
    return (
        <ListGroup className="mt-4">
           
            {brands.map((val) => {
                return (
             <ListGroupItem className="d-flex justify-content-between">
            <img src={link+val.website_url} alt="" />
            <strong>{val.name}</strong>
            <strong>{val.website_url}</strong>
            <div className="ml-auto">
                <Link to={`/edit/${val.id}`}  className="btn btn-warning ml-2" >Edit</Link>
                <Button color="danger"  onClick={() => {
                    setID(val.id);
                    deleteBrand(); 
                } }>Delete</Button>
            </div>
            </ListGroupItem>
            )
            })}
            
            
            
        </ListGroup>
    )
}
