import axios from 'axios';

const IP_RANGE_REDIRECTED = import.meta.env.VITE_IP_RANGE;


export async function getData(ip: string) {
    // GET IPBASE
    const ipBase = ip.split('.').slice(0, 3).join('.')
    console.log("IPBASE", ipBase);

    // DECIDE URL 
    let url: string;
    let resource: string;
    if (ipBase === IP_RANGE_REDIRECTED) {
        url = 'https://catfact.ninja/fact';
        resource = 'fact';
    }
    else {
        url = 'https://www.boredapi.com/api/activity';
        resource = 'activity';
    }

    // SEND REQUEST
    try {
        const response: { [key: string]: any } = await axios.get(url);
        console.log(response);
        return response.data[resource];
    }
    catch (err) {
        console.error("ERROR OCCURRED IN GET-DATA");
        throw err;
    }
}
