interface WalletProps {
    name: string
    amount?: string
    id: number
    removeWallet: CallableFunction
}

export function Wallet(props: WalletProps) {

    return (
        <div className="flex flex-col py-8 px-8 rounded-[24px] border-[1px] border-finance-purple-200 shadow-lg hover:shadow-2xl transition bg-white">
            <span className="block font-semibold text-[32px] text-finance-blue-400 leading-10 mb-[43px]">{props.name}</span>

            <span className="flex flex-col mt-auto font-extrabold text-[32px]">
                <span className="block font-normal text-[28px] leading-6">R$</span>
                <span className="mb-[43px]">{props.amount ?? '0,00'}</span>
                <button className="font-normal text-[12px] text-white py-[6px] bg-finance-purple-600 hover:bg-finance-purple-200 w-40 rounded-full self-end hover:shadow-lg transition"
                    onClick={() => props.removeWallet(props.id)}>
                    REMOVER CARTEIRA
                </button>
            </span>
        </div>
    )
}