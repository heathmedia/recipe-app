import NavBar from "./NavBar";

function Header() {
    return (
        <header className="w-full bg-red-900 text-orange-100">
            <div className="flex flex-wrap max-w-6xl mx-auto px-6 py-6 justify-between items-center">
                <div className="text-xl font-bold">Recipes</div>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;