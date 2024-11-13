'use client'

import useSWR from 'swr'
import axios from 'axios';

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
const fetcher = (url: string, token?: string) => axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}` // Assuming it's a Bearer token
    }
  })
    .then(response => {
      // Handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });


export default function Page() {

    // const { data: user } = useSWR(['https://app.circle.so/api/v1/headless/auth_token', process.env.CIRCLE_TOKEN], ([url, token]) => fetcher(url, token))
    // console.log('user', user);

    return <p>Dashboard Page</p>;
  }