import { useState } from 'react';
import { ModalWallet } from '../components/ModalWallet';
import { Wallet } from '../components/Wallet';

export function Wallets() {
    const [openModal, setOpenModal] = useState(false);

    const [wallets, setWallets] = useState([
        {
            id: 1,
            name: 'Conta Principal da Aplicação',
            amount: '9.826.260,00'
        },
        {
            id: 2,
            name: 'Neon Pagamentos S.A.',
            amount: '12.999,02'
        },
        {
            id: 3,
            name: 'Inter',
            amount: '0,00'
        },
        {
            id: 4,
            name: 'Pic Pay',
            amount: '120.648,10'
        }
    ])

    const removeWallet = (id: number) => {
        const updatedWallets = wallets.filter(item => item.id !== id);
        setWallets(updatedWallets)
    };

    return (
        <>
            <ModalWallet
                isOpen={openModal}
                isClosed={() => setOpenModal(!openModal)}
                wallets={wallets}
                setWallets={setWallets} />

            <main className="mx-auto w-full md:px-12">

                {/* Wallets Section */}
                <section id="cafe-wallet" className="max-w-[1200px] mx-auto p-4">

                    {/* Header Section */}
                    <header className="flex py-[98px]">
                        <div className="w-full flex">
                            <span>MINHAS CARTEIRAS</span>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={() => setOpenModal(true)} className="rounded-full bg-finance-purple-600 hover:bg-finance-purple-200 text-[14px] text-white w-40 hover:shadow-lg transition">ADICIONAR</button>
                        </div>
                    </header>

                    {/* Wallets */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch">

                        {wallets.map(wallet => {
                            return <Wallet key={wallet.id} name={wallet.name} amount={wallet.amount} id={wallet.id} removeWallet={removeWallet} />
                        })}

                    </div>
                </section>
            </main>
        </>
    )
}