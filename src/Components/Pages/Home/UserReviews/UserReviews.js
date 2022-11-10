import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/UserContext';

const UserReviews = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    console.log(orders.length);

    useEffect(() => {
        fetch(`http://localhost:5000/userreview?email=${user?.email}`,{
            headers:{
                authorization: `Bearer${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    
                }
                return res.json()
            })
            .then(data => setOrders(data.data))
    }, [user?.email])
    return (
        <div>
            <h1>you have {orders.length} review</h1>
            
        </div>
    );
};

export default UserReviews;