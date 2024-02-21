import axios from "axios";

const serverUrl = "http://127.0.0.1:5000"
export const GET = async (endpoint, func) => {
  try {
    const response = await axios.get(serverUrl + endpoint, {
      headers: {
        "content-type": "application/json"
      },
    //   withCredentials: true 
    });
    const jsonData = response.data;
    func(null, jsonData);
  } catch (error) {
    func(error, "");
  }
};

export const POST = async (endpoint,data,func) => {
    try {
      const response = await axios.post(serverUrl + endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        // withCredentials: true
      });

      const jsonData = response.data;
      func(null, jsonData);
    } catch (error) {
      func(error, "");
    }
  };


