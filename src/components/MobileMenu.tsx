export function MobileMenu() {
    return (
        <>
            {/* Mobile Menu */}
            <div className="flex flex-col text-center pb-2 md:hidden">
                <a className="font-bold text-[18px] text-finance-blue-400 px-4 flex-center">RECEITAS</a>
                <a className="font-bold text-[18px] text-finance-blue-400 px-4 flex-center">DESPESAS</a>
                <a className="font-bold text-[18px] text-finance-purple-600 px-4 flex-center">CARTEIRAS</a>
            </div>

            {/* Settings */}
            <div className="flex justify-center md:hidden">
                <a className="block text-[14px] pt-2">PERFIL</a>
            </div>
        </>
    )
}