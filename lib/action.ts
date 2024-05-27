"use server";

export async function getPosts() {
  try {
    const response = await fetch(`${process.env.BLOG_API_URI}`);
    if (!response) {
      throw new Error(`Could not fetch properties`);
    }
    return response.json();
  } catch (error) {
    console.log(`An Error occurred while fetching properties: ${error}`);
  }
}

export async function getPost(slug: string) {
  try {
    const response = await fetch(`${process.env.BLOG_API_URI}/${slug}`);
    if (!response.ok) {
      throw new Error(`Could not fetch post with ID: ${slug}`);
    }
    return response.json();
  } catch (error) {
    console.log(`An error occurred while fetching the post: ${error}`);
    return null;
  }
}

// Get news
export async function getNews() {
  try {
    const response = await fetch(`${process.env.NEWS_API_URI}`);
    if (!response) {
      throw new Error(`Could not fetch properties`);
    }
    return response.json();
  } catch (error) {
    console.log(`An Error occurred while fetching properties: ${error}`);
  }
}

export async function getArticle(slug: string) {
  try {
    const response = await fetch(`${process.env.NEWS_API_URI}/${slug}`);
    if (!response.ok) {
      throw new Error(`Could not fetch News article with slug: ${slug}`);
    }
    return response.json();
  } catch (error) {
    console.log(`An error occurred while fetching the News article: ${error}`);
    return null;
  }
}

// Get property

export async function getProperties() {
  try {
    const response = await fetch(`${process.env.PROPERTY_API_URI}`);
    if (!response) {
      throw new Error(`Could not fetch properties`);
    }
    return response.json();
  } catch (error) {
    console.log(`An Error occurred while fetching properties: ${error}`);
  }
}

export async function getProperty(slug: string) {
  try {
    const response = await fetch(`${process.env.PROPERTY_API_URI}/${slug}`);
    if (!response.ok) {
      throw new Error(`Could not fetch SINGLE property with slug: ${slug}`);
    }
    return response.json();
  } catch (error) {
    console.log(`An error occurred while fetching a  SINGLE property: ${error}`);
    return null;
  }
}



// Get testimony

export async function getTestimonies() {
  try {
    const response = await fetch(`${process.env.TESTIMONY_API_URI}`);
    if (!response) {
      throw new Error(`Could not fetch testimony`);
    }
    return response.json();
  } catch (error) {
    console.log(`An Error occurred while fetching testimony: ${error}`);
  }
}

export async function getTestimony(slug: string) {
  try {
    const response = await fetch(`${process.env.TESTIMONY_API_URI}/${slug}`);
    if (!response.ok) {
      throw new Error(`Could not fetch SINGLE testimony with slug: ${slug}`);
    }
    return response.json();
  } catch (error) {
    console.log(`An error occurred while fetching the single testimony: ${error}`);
    return null;
  }
}


// Newsletter subscription
export async function subscribe(email: string) {
  try {
    const response = await fetch(`${process.env.SUBSCRIBE_API_URI}`, {
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
  }
}
