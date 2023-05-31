import React from "react"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import UserNavigation from "./UserNavigation"

const Header = () => {
	return (
		<>
			<div class="primary-navigation">
				<Logo />
				<SearchBar />
				<nav class="user-navigation">
					<UserNavigation />
				</nav>
			</div>
		</>
	)
}

export default Header
