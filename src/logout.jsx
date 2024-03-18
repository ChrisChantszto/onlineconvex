import { useAuth0 } from "@auth0/auth0-react";
import './Header.css';

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button className="add-review-btn"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log out
    </button>
  );
}