import React, { useEffect, useState } from 'react';
// import { fetchData } from './apiClient';

const Dashboard = () => {
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const result = await fetchData();
    //             setData(result);
    //         } catch (error) {
    //             console.error('Failed to fetch data');
    //         }
    //     };

    //     getData();
    // }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
        </div>
    );
};

export default Dashboard;
