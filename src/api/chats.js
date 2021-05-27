import dataBase from '../dataBase/firestore';

export const fetchChats = () => {
    console.log('DB_HOST => ', process.env.DB_HOST)
    return dataBase
        .collection('chat')
        .get()
        .then(response => {
            console.log('fire base response ' , response.docs.map(v => v.data()));
            return response.docs.map(v => v.data());
        })
}

