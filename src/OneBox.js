import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OneBox = () => {
    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token'); // Get token from local storage

    // useEffect(() => {
    //     const fetchThreads = async () => {
    //         try {
    //             const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //             setThreads(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             setError('Error fetching threads');
    //             setLoading(false);
    //         }
    //     };

    //     fetchThreads();
    // }, [token]);

    // const deleteThread = async (threadId) => {
    //     try {
    //         await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setThreads(threads.filter((thread) => thread.id !== threadId));
    //     } catch (error) {
    //         setError('Error deleting thread');
    //     }
    // };

    // const fetchThreadDetails = async (threadId) => {
    //     try {
    //         const response = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         console.log(response.data); // Handle the thread details as needed
    //     } catch (error) {
    //         setError('Error fetching thread details');
    //     }
    // };

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>OneBox</h1>
            {/* <ul>
                {threads.map((thread) => (
                    <li key={thread.id}>
                        {thread.subject}
                        <button onClick={() => fetchThreadDetails(thread.id)}>View Details</button>
                        <button onClick={() => deleteThread(thread.id)}>Delete</button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default OneBox;
