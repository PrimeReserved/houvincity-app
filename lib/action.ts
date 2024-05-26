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

// Get property

export async function getProperty() {
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

// Get testimony

export async function getTestimony() {
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
