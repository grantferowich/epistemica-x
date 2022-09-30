import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CryptoStickyTableContainer from "../containers/CryptoStickyTableContainer";
import CreateBasketContainer from "../containers/CreateBasketContainer";


export default function NavTabs(props) {
//State
  const [walletAddress, setWalletAddress] = useState(null)

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      
      if (solana) { 
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({onlyIfTrusted: true})
          console.log('Connected with Public Key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
          console.log("wallet address", walletAddress)
          }

      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻 here https://phantom.app/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with public key:', response.publicKey.toString())
      setWalletAddress(response.publicKey.toString())
    }
    
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    }
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  },[])

  const renderNotConnectedContainer = () => (
    <Button
    className="cta-button connect-wallet-button"
    onClick={connectWallet}
    >
    Connect to Wallet
    </Button>
  );  


  return (
    <div sx={{ display: 'flex' }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Epistemica-X
          </Typography>
          { walletAddress ?  <Typography variant="h6" color="inherit" align="right">
                                 {walletAddress} is connected!
    </Typography> : (renderNotConnectedContainer())}
        </Toolbar>
      </AppBar>
    </Box>
        <CryptoStickyTableContainer/>
        <CreateBasketContainer/>
    </div>
  );
}
