import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/UserContext';

const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    console.log(orders.length);

    useEffect(() => {
        fetch(`http://localhost:5000/userreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data.data))
    }, [user?.email])
    return (
        <div>
            <h1>you have {orders.length} review</h1>
            
        </div>
    );
};

export default UserReviews;