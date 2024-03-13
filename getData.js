import axios from 'axios';

async function getData(userId) {
    try {
        const [userData, postsData] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        const user = userData.data;
        const posts = postsData.data;

        const result = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
                geo: {
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng
                }
            },
            phone: user.phone,
            website: user.website,
            company: {
                name: user.company.name,
                catchPhrase: user.company.catchPhrase,
                bs: user.company.bs
            },
            posts: posts
        };

        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default getData;
