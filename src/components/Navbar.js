import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CryptoStickyTableContainer from "../containers/CryptoStickyTableContainer";
import CreateBasketContainer from "../containers/CreateBasketContainer";
import Leaderboard from "./Leaderboard.js";
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import kp from '../keypair.json';

const { SystemProgram, Keypair } = web3;
const array = Object.values(kp._keypair.secretKey)
const secret = new Uint8Array(array)
const baseAccount = web3.Keypair.fromSecretKey(secret)
const programId = new PublicKey("8LiyNLB8f3sK4KwKggQ6VkGeBFrGG2vRnd4XfBsi3vYU");
const network = clusterApiUrl('devnet')
const opts = {
  preflightCommitment: "processed"
}
const DUMMY_SCORES = [
  { user: "0x34567", score: 14.7},
  { user: "0x456", score: 75.1},
  { user: "0x111", score: -0.2}
]
export default function NavTabs(props) {
//State
  const [walletAddress, setWalletAddress] = useState(null)
  const [scoresList, setScoresList] = useState([]);

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

  // const sendScore = () => {

  // }

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    }
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  },[])

  const renderNotConnectedContainer = () => (
    <div className="not-connected-container">
    <Button
    className="cta-button connect-wallet-button"
    onClick={connectWallet}
    >
    Connect to Wallet
    </Button>
    </div>
  );  

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment );
    const provider = new AnchorProvider(
      connection, window.solana, opts.preflightCommitment
    );
    return provider;
}

const getProgram = async () => {
    const idl = await Program.fetchIdl(programId, getProvider());
    return new Program(idl, programId, getProvider()) 
}

const getScoresList = async() => {
  try {
      const program = await getProgram();
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
      console.log("Accessed the account ", account)
      setScoresList(DUMMY_SCORES)
      // setScoresList(account.vecScoresList)

  } catch (error) {
      console.log("Error in getScoreList: ", error)
      setScoresList(null)
  }
}

const createScoreAccount = async () => {
  try {

     const provider = getProvider();
     const program = await getProgram();
     console.log("ping")
     await program.rpc.initialize({
      accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount]
     });
     console.log("Created a new baseAccount w/address: ", baseAccount.publicKey.toString())
     await getScoresList()
  } catch (error) {
      console.log("Error creating baseAccount: ", error)
  }
}

const renderConnectedContainer = () => {
  console.log("connected with wallet ", walletAddress)
  if (scoresList == null) {
    return (
      <div className="connected-container">
         <button
          className="cta-button connect-wallet-button"
          onClick={createScoreAccount}>
         Initialize Score Account!
        </button>
      </div>
    )
  } else {
    return ( <div className="connected-container">
    <Typography variant="h6" color="inherit" align="right">
    {walletAddress} is connected!
    </Typography>
    <Leaderboard scoresList={scoresList}/>
    </div>
    )
  }
 }

useEffect( () => {
  console.log("Fetching scores list...")
  getScoresList();
},[])

  return (
    <div sx={{ display: 'flex' }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Epistemica-X
          </Typography>
          { !walletAddress && renderNotConnectedContainer()}
        </Toolbar>
      </AppBar>
    </Box>
        <CryptoStickyTableContainer/>
        { walletAddress && (renderConnectedContainer())}
        <CreateBasketContainer/>
    </div>
  );
}
