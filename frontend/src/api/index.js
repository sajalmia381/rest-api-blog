import axios from 'axios';

// const url = 'http://127.0.0.1:8000/'


const blogUrl = 'https://jsonplaceholder.typicode.com/'


const getblogList = async () => {
    // Get blog list data
    try{    
        let {data} = await axios.get(`${blogUrl}posts`);
        return data
    } catch(err) {
        console.error(err)
    }
}


const getSingleBlog = async (post_id) => {
    // Get SingleBlog data
    try{    
        let {data} = await axios.get(`${blogUrl}posts/${post_id}`);
        return data
    } catch(err) {
        console.error(err)
    }
}

export {getblogList, getSingleBlog}