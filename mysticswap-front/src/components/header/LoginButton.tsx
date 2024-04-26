import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance } from '../../services/metaMask/utils'

const initialState = { accounts: [], balance: "", chainId: "", };

const LoginButton = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [wallet, setWallet] = useState(initialState);


  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        // If length 0, user is disconnected.            
        setWallet(initialState);
      }
    };

    const refreshChain = (chainId: any) => {
      setWallet((wallet) => ({ ...wallet, chainId }));
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request(
          { method: "eth_accounts" }
        );
        refreshAccounts(accounts);
        window.ethereum.on(
          "accountsChanged",
          refreshAccounts
        );
      }
    };

    getProvider();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
      window.ethereum.on("chainChanged", refreshChain);
    };
  }, []);

  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(await window.ethereum!.request({
      method: "eth_getBalance",
      params: [accounts[0], "latest"],
    }));
    const chainId = await window.ethereum!.request({
      method: "eth_chainId",
    });
    setWallet({ accounts, balance, chainId });
  };


  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    updateWallet(accounts);
  };

  return (
    <>
      {hasProvider && !(wallet.accounts.length > 0) && (
        <button
          className="text-gray-800 font-bold rounded-lg bg-gray-300 cursor-pointer px-4 text-1xl"
          onClick={handleConnect}>Login</button>
      )}

      {wallet.accounts.length > 0 && (
        <div className=''>{wallet.balance} ETH</div>
      )}
    </>
  )
}

export default LoginButton