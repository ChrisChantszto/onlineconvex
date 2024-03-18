import { useAuth0 } from "@auth0/auth0-react";
import './Header.css';

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return <button className="add-review-btn" onClick={loginWithRedirect}>Log in</button>;
}