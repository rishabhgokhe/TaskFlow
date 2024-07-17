"use client";
import axios from "axios";

async function GetQuotes() {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/quotes?category=inspirational",
      {
        headers: {
          "X-Api-Key": process.env.QUOTES_API_KEY
        },
      }
    );
    const data = response.data[0];
    console.log(data.quote);
    return data.quote;
  } catch (error) {
    console.log(error);
    return "An error occurred while fetching the quote.";
  }
};

export default GetQuotes;