import { FormEvent } from "react";

type Wallet = {
    id: number,
    name: string,
    amount: string
}

type ModalWalletProps = {
    isOpen: boolean
    isClosed: () => void
    wallets: Wallet[];
    setWallets: CallableFunction;
}

let newName = ''
let amount = ''
let newId = 4

export function ModalWallet({ isOpen, isClosed, wallets, setWallets }: ModalWalletProps) {

    function createNewAccount(event: FormEvent) {
        event.preventDefault()

        newId += 1;

        // Implementar lógica para não permitir valores vazios

        const newWallet = {
            id: newId,
            name: newName,
            amount: amount
        };

        setWallets([...wallets, newWallet]);

        newName = ''
        amount = ''

        isClosed()

        console.log(newWallet)
    }

    return (
        <>
            {isOpen && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={isClosed}></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                <div className="text-left text-finance-purple-900 py-8 px-8">
                                    <div className="flex justify-between items-center pb-4">
                                        <p className="text-2xl font-bold">Adicionar Carteira</p>
                                        <div onClick={isClosed} className="py-1 px-2 bg-finance-blue-400 hover:bg-finance-blue-900 text-white text-xs rounded-md cursor-pointer z-50 transition">
                                            FECHAR
                                        </div>
                                    </div>

                                    <form onSubmit={createNewAccount}>
                                        <input
                                            type="hidden"
                                            value="5"
                                            onChange={(event) => {
                                                newId = parseInt(event.target.value)
                                            }} />

                                        <label htmlFor="AccountName" className="block text-md font-medium pt-4 leading-6">Nome</label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                placeholder="Digite o nome da sua nova carteira"
                                                onChange={(event) => {
                                                    newName = event.target.value
                                                }}
                                                className="block w-full rounded-lg border-0 py-3 pl-4 pr-20 mb-4 font-bold bg-finance-gray-50 text-finance-purple-900 ring-1 ring-inset ring-finance-purple-200 placeholder:text-finance-blue-400 placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-finance-purple-600 text-lg leading-8" />
                                            <div className="absolute inset-y-0 right-0 flex items-center"></div>
                                        </div>

                                        <label htmlFor="Amount" className="block text-md font-medium leading-6 text-gray-900">Saldo Inicial</label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                                <span className="text-gray-500 sm:text-sm">R$</span>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="0.00"
                                                onChange={(event) => {
                                                    amount = event.target.value
                                                }}
                                                className="block w-full rounded-lg border-0 py-3 pl-12 pr-20 mb-4 font-bold bg-finance-gray-50 text-finance-purple-900 ring-1 ring-inset ring-finance-purple-200 placeholder:text-finance-blue-400 placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-finance-purple-600 text-lg leading-8" />
                                            <div className="absolute inset-y-0 right-0 flex items-center"></div>
                                        </div>

                                        <button type="submit" className="py-2 px-8 mt-4 rounded-lg bg-finance-purple-600 hover:bg-finance-purple-900 text-white shadow-md hover:shadow-xl transition">Salvar</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}