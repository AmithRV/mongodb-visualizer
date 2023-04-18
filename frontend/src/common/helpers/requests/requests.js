import axios from '../axios/axios'

const getCollections = (db_name, setCollections, setCollectionsLoader) => {
    setCollectionsLoader(true);
    axios.get(`/getcollections/${db_name}`)
        .then((response) => {
            setCollections(response?.data);
        }).finally(() => {
            setCollectionsLoader(false);
        })
}

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

const getDbs = (setDatabaseList, setLoader) => {
    axios.get('/list-dbs')
        .then((response) => {
            setDatabaseList(response?.data);
            setLoader(false);
        })
}

export {
    getcollectionDetails,
    getCollections,
    getDbs
}