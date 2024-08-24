// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const GoogleLoginRedirect = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get('token');

//         if (token) {
//             localStorage.setItem('token', token); // Store token locally
//             navigate('/onebox'); // Redirect to the OneBox page
//         } else {
//             // Handle error
//         }
//     }, [navigate]);

//     return <div>Redirecting...</div>;
// };

// export default GoogleLoginRedirect;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLoginRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('token', token); // Store token locally
            navigate('/onebox'); // Redirect to the OneBox page
        } else {
            // Handle error, e.g., show a message to the user
            console.error('Token not found');
        }
    }, [navigate]);

    return <div>Redirecting...</div>;
};

export default GoogleLoginRedirect;
