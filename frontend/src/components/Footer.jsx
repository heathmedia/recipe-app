function Footer() {
    return (
        <footer className="bg-red-900 text-orange-200 mt-12">

            <div className="max-w-6xl mx-auto px-6 py-6">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                    {/* Brand */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Recipes</h2>
                        <p className="text-sm">
                            All your recipes and more.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-6 text-sm">



                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-amber-700 mt-6 pt-4 text-center text-sm">

                    © 2026 Scott Heath. All rights reserved.

                </div>

            </div>

        </footer>
    );
}

export default Footer;