"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";


export async function getPosts() {
  try {
    const query = groq`*[_type == 'post']`;
    if (!query) {
      throw new Error(`Could not fetch blog post`);
    }
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.log(`An Error occurred while fetching blog post: ${error}`);
  }
}

export async function getPost(slug: string) {
  try {
    const query = groq`*[_type == 'post' && slug.current == $slug][0]{
      ...,
      body,
      author->
  }`;

    if (!query) {
      throw new Error(`Could not fetch post with ID: ${slug}`);
    }
    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.log(`An error occurred while fetching the post: ${error}`);
    return null;
  }
}

// Get news
export async function getNews() {
  try {
    const query = groq`*[_type == 'news']`;
    if (!query) {
      throw new Error(`Could not fetch news post`);
    }
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.log(`An Error occurred while fetching News: ${error}`);
  }
}

export async function getArticle(slug: string) {
    try {
      const query = groq`*[_type == 'news' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
  
      if (!query) {
        throw new Error(`Could not fetch news article with ID: ${slug}`);
      }
      const post = await client.fetch(query, { slug });
      return post;
  } catch (error) {
    console.log(`An error occurred while fetching the News article: ${error}`);
    return null;
  }
}

// Get property

export async function getProperties() {
  try {
    const query = groq`*[_type == 'property']`;
    if (!query) {
      throw new Error(`Could not fetch properties`);
    }
    const properties = await client.fetch(query);
    return properties;
  } catch (error) {
    console.log(`An Error occurred while fetching properties: ${error}`);
    return []; // Return an empty array or a default value
  }
}

export async function getProperty(slug: string) {
   try {
      const query = groq`*[_type == 'property' && slug.current == $slug][0]{
        ...
    }`;
  
      if (!query) {
        throw new Error(`Could not fetch news article with ID: ${slug}`);
      }
      const post = await client.fetch(query, { slug });
      return post;
  } catch (error) {
    console.log(`An error occurred while fetching a  SINGLE property: ${error}`);
    return null;
  }
}



// Get testimony

export async function getTestimonies() {
  try {
    const query = groq`*[_type == 'testimony']`;
    if (!query) {
      throw new Error(`Could not fetch testimony review`);
    }
    const review = await client.fetch(query);
    return review;
  } catch (error) {
    console.log(`An Error occurred while fetching testimony: ${error}`);
  }
}

export async function getTestimony(slug: string) {
    try {
      const query = groq`*[_type == 'testimony' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
  
      if (!query) {
        throw new Error(`Could not fetch testimony review with ID: ${slug}`);
      }
      const review = await client.fetch(query, { slug });
      return review;
  } catch (error) {
    console.log(`An error occurred while fetching the single testimony: ${error}`);
    return `An error occurred while fetching the single testimony: ${error}`;
  }
}


// Newsletter subscription
export async function subscribe(email: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUBSCRIBE_API_URI}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error(`Could not subscribe. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`An Error occurred while subscribing: ${error}`);
    return `An Error occurred while subscribing: ${error}`;
  }
}

// Property Event
export async function eventForm({ title, email}: any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_EVENT_API_URI}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, email }),
    });
    if (!response.ok) {
      throw new Error(`Could not subscribe to event. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`An Error occurred while subscribing to Property event: ${error}`);
    return `An Error occurred while subscribing to Property event: ${error}`;
  }
}

// Contact 
export async function contact({ firstName, lastName, email, phoneNumber, message}: any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_API_URI}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, phoneNumber, message }),
    });
    if (!response.ok) {
      throw new Error(`Could not contact us. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`An Error occurred while submitting contact form: ${error}`);
    return `An Error occurred while submitting contact form: ${error}`;
  }
};

// Payment
export async function payment({ fullname, email, address, city, state, company, phoneNumber}: any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PROPERTY_PAYMENT_API_URI}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, address, city, state, company, phoneNumber }),
    });
    if (!response.ok) {
      throw new Error(`Could not make payment. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`An Error occurred while submitting payment form: ${error}`);
    return `An Error occurred while submitting payment form: ${error}`;
  }
}
// Get Events

export async function getEvents() {
  try {
    const query = groq`*[_type == 'event']`;
    if (!query) {
      throw new Error(`Could not fetch events`);
    }
    const properties = await client.fetch(query);
    return properties;
  } catch (error) {
    console.log(`An Error occurred while fetching events: ${error}`);
    return []; // Return an empty array or a default value
  }
}

export async function getEvent(slug: string) {
   try {
      const query = groq`*[_type == 'event' && slug.current == $slug][0]{
        ...
    }`;
  
      if (!query) {
        throw new Error(`Could not fetch news article with ID: ${slug}`);
      }
      const post = await client.fetch(query, { slug });
      return post;
  } catch (error) {
    console.log(`An error occurred while fetching a  SINGLE event: ${error}`);
    return null;
  }
}