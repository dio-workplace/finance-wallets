import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="mx-auto w-full bg-finance-gray-100 border-b-[1px] border-[#D1D1D1]">

            <div className="flex flex-col md:flex-row md:items-center md:gap-4 px-4 md:px-12 py-6 leading-6">
                {/* Logotype */}
                <div className="md:basis-1/4 md:text-left text-center">
                    <span className="font-bold text-[24px] text-finance-blue-400">MINHAS FINANÇAS</span>
                </div>

                {/* Menu (sanduíche) para dispositivos móveis */}
                <div className="md:hidden my-4 flex justify-center">
                    <button className="text-2xl text-finance-blue-400 px-4 focus:outline-none" onClick={handleMenuClick}>
                        &#9776;
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:pb-0 md:flex-row md:basis-1/2 md:justify-center">
                    <a className="font-bold text-[18px] text-finance-blue-400 px-4 flex-center">RECEITAS</a>
                    <a className="font-bold text-[18px] text-finance-blue-400 px-4 flex-center">DESPESAS</a>
                    <a className="font-bold text-[18px] text-finance-purple-600 px-4 flex-center">CARTEIRAS</a>
                </div>

                {/* Settings */}
                <div className="hidden md:flex md:justify-end md:basis-1/4">
                    <a className="block text-[14px]">PERFIL</a>
                </div>

                {isMenuOpen && (<MobileMenu />)}
            </div>

        </header >
    )
}