import { client } from "@/sanity/client";
import { groq } from "next-sanity"

export async function getProperty(){
    try {
        const query = groq`*[_type == "property"]`;
        const data = await client.fetch(query);
        if (!data) {
            throw new Error(`Could not fetch properties`);
        }
        return data;
    } catch(error){
        console.log(`An Error occurred while fetching properties: ${error}`)
    }
}

export async function getPost(){
    try {
        const query = groq`*[_type == "post"]`;
        const response = await client.fetch(query);
        if (!response) {
            throw new Error(`Could not fetch properties`);
        }
        return response;
    } catch(error){
        console.log(`An Error occurred while fetching properties: ${error}`)
    }
}

export async function getNews(){
    try {
        const query = groq`*[_type == "news"]`;
        const response = await client.fetch(query);
        if (!response) {
            throw new Error(`Could not fetch properties`);
        }
        return response;
    } catch(error){
        console.log(`An Error occurred while fetching properties: ${error}`)
    }
}

export async function getTestimony(){
    try {
        const query = groq`*[_type == "testimony"]`;
        const response = await client.fetch(query);
        if (!response) {
            throw new Error(`Could not fetch reviews`);
        }
        return response;
    } catch(error){
        console.log(`An Error occurred while fetching reviews: ${error}`)
    }
}