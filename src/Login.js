import React from 'react';

// const Login = () => {
//     const handleGoogleLogin = () => {
//         window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
//     };

//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <button onClick={handleGoogleLogin} className="google-login-btn">
//                 Login with Google
//             </button>
//         </div>
//     );
// };

// export default Login;


const Login = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3001/auth/callback';
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <button onClick={handleGoogleLogin} className="google-login-btn">
                Login with Google
            </button>
        </div>
    );
};

export default Login;
