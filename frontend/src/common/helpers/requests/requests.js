import axios from '../axios/axios'

const getcollectionDetails = (collection_name, database_name, setCollectionDetails) => {
    axios.get(`/getcollection-details`, {
        params: {
            database: database_name,
            collection: collection_name
        }
    }).then((response) => {
        console.log("collection_detalis : ", response?.data);
        setCollectionDetails(response?.data);
    })
}

export {
    getcollectionDetails
}