const clientId = 'i1HmNfSIn_t5C0S4Bze8Jw';
const apiKey = '5g7bf3Tw5L2Qx1Q9ElHODq-8IHKB5IxPhSrMkIZdM_EHHlb0QHO_xxnjPIDandPYHfpukk79ngX6kzzSkvOS_A0kxoK8RH556gJaEaM41v8GrPTUQeJ0kowsT7wqW3Yx';

let Yelp = {
    search(term, location, sortBy) {
        const corsServer = 'https://cors-anywhere.herokuapp.com/';
        const url = `${corsServer}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    'id': business.id, 
                    'imageSrc': business.image_url, 
                    'name': business.name, 
                    'address': `${business.location.address1} ${business.location.address2} ${business.location.address3}`,
                    'city': business.location.city,
                    'state': business.location.state,
                    'zipCode': business.location.zip_code,
                    'category': business.categories[0].title,
                    'rating': business.rating,
                    'reviewCount': business.review_count
                }));
            }
        });
    }
};


export default Yelp;