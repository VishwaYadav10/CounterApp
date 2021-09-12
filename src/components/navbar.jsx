// We dint have any calculations or any dependencies in this class, so converted to Stateless Functional Component

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {

    // console.log("Counters - Rendered");

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/">
                Navbar{" "}
                <span
                    className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;