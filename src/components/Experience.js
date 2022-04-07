import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Fade } from 'react-reveal';
import Github from "../github-svgrepo-com.svg";

class Experience extends Component {
    render() {
        return (
            <section id="Experience" className='experience-section'>
                <Fade bottom delay={100}>
                <h2 className='experience-header'>
                    Experience
                </h2>
                </Fade>
                <div className='experience-inner'>
                    <Tabs selectedTabClassName='tab-selected'>
                    <div className='experience-tablist'>
                        <TabList>
                            <Tab className="tablist-item tab0">
                                <Fade bottom delay={200}>CARFS Project</Fade>
                            </Tab>
                            <Tab className="tablist-item tab1" >
                                <Fade bottom delay={300}>CryptoAliens</Fade>
                            </Tab>
                            <Tab className="tablist-item tab2">
                                <Fade bottom delay={400}>NFT Matching Game</Fade>
                            </Tab>
                            <Tab className="tablist-item tab3">
                                <Fade bottom delay={500}>NFT Marketplace</Fade>
                            </Tab>
                            <Tab className="tablist-item tab4">
                                <Fade bottom delay={600}>Decentralized Jag Bot</Fade>
                            </Tab>
                            <Tab className="tablist-item tab5">
                                <Fade bottom delay={700}>Parking Lot App</Fade>
                            </Tab>
                            <Tab className="tablist-item tab6">
                                <Fade bottom delay={800}>DeFi Vulnerability Analysis Paper</Fade>
                            </Tab>
                        </TabList>
                    </div>
                    <div className='tab-panels'>
                        <TabPanel>
                        <div className="tabpanel-0">
                            <Fade bottom delay={200}>
                            <h3 className='project-title'>
                                Student Assistant 
                                <h3 className='project-title-link'>
                                    @
                                    <a href="https://www.southalabama.edu/colleges/soc/research/nsfdigitalforensics.html">
                                        University of South Alabama
                                    </a>
                                </h3>
                            </h3>
                            </Fade>
                            <Fade bottom delay={300}>
                            <p className='project-time'>
                                September-December 2021
                            </p>
                            </Fade>
                            <Fade bottom delay={400}>
                            <div className='project-details'>
                                <ul>
                                    <li>
                                        Restored existing data, consisting of 20 databases, from a shard into local InfluxDB server,
                                    </li>
                                    <li>
                                        Built Python scripts to query and extract data from local InfluxDB server.
                                    </li>
                                    <li>
                                        Developed Machine Learning and Deep Learning algorithms for classification 
                                        and anomaly detection. Random Forest was used for classification and regression. 
                                        AutoML was used to cross-evaluate various classification algorithms in terms of performance.
                                    </li>
                                    <li>
                                        Developed 4 malicious Virtual Machine hosts to monitor benign behavior. (A Distributed 
                                        Denial of Service attack, a Kubernetes exploit, an OpenSSL attack, and a Ransomware attack).
                                    </li>
                                </ul>
                            </div>
                            </Fade>
                            <Fade bottom delay={800}>
                            <ul className='project-tech-list'>
                                <li>Python</li>
                                <li>InfluxDB</li>
                                <li>Kubernetes</li>
                                <li>Docker</li>
                            </ul>
                            </Fade>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="tabpanel-1">
                            <Fade bottom delay={200}>
                            <h3 className='project-title'>
                                CryptoAliens
                                <a href="https://github.com/JTStephens18/CryptoAliens">
                                    <img alt="github" src={Github} width="20" height="20" className='matching-github'>
                                    </img>
                                </a>
                            </h3>
                            </Fade>
                            <Fade bottom delay={300}>
                            <p className='project-time'>
                                Janurary 2022-Present
                            </p>
                            </Fade>
                            <Fade bottom delay={400}>
                            <div className='project-details'>
                                <ul>
                                    <li>
                                        In this Dapp, a user inputs a string which creates a randomzied 
                                        16 digit DNA sequence. This DNA is then used to create an alien 
                                        that has unique features.
                                    </li>
                                    <li>
                                        The alien can feed on other aliens, or a CryptoKitty, to modify their 
                                        DNA and create new aliens.
                                    </li>
                                    <li>
                                        Users can transfer ownership of their alien to another user.
                                    </li>
                                    <li>
                                        Users can attack other aliens to gain levels. These levels can be used to change 
                                        the name of your alien or change their DNA.
                                    </li>
                                </ul>
                            </div>
                            </Fade>
                            <Fade bottom delay={800}>
                            <ul className='project-tech-list'>
                                <li>Solidity</li>
                                <li>React</li>
                                <li>Web3.js</li>
                                <li>Ganache</li>
                                <li>Truffle</li>
                            </ul>
                            </Fade>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="tabpanel-2">
                            <Fade bottom delay={200}>
                            <h3 className='project-title'>
                                NFT Matching Game
                                <a href="https://github.com/JTStephens18/nftMatchingGame">
                                    <img alt="github" src={Github} width="20" height="20" className='matching-github'>
                                    </img>
                                </a>
                            </h3>
                            </Fade>
                            <Fade bottom delay={300}>
                            <p className='project-time'>
                                Janurary 2022-Present
                            </p>
                            </Fade>
                            <Fade bottom delay={400}>
                            <div className='project-details'>
                                <ul>
                                    <li>
                                        Users are able to play a matching game. Once they find a 
                                        correct match then an NFT of the matched images gets minted and 
                                        added to their account.
                                    </li>
                                    <li>
                                        Users are able to continue playing and mint as many NFTs as they like.
                                    </li>
                                    <li>
                                        I wanted to gain a better understanding of Web3 implementation using MetaMask
                                        and NFT minting. 
                                    </li>
                                </ul>
                            </div>
                            </Fade>
                            <Fade bottom delay={800}>
                            <ul className='project-tech-list'>
                                <li>Solidity</li>
                                <li>React</li>
                                <li>Web3.js</li>
                                <li>Ganache</li>
                                <li>Truffle</li>
                            </ul>
                            </Fade>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="tabpanel-3">
                            <Fade bottom delay={200}>
                            <h3 className='project-title'>
                                NFT Marketplace
                                <a href="https://github.com/JTStephens18/NFTMarketplace">
                                    <img alt="github" src={Github} width="20" height="20" className='matching-github'>
                                    </img>
                                </a>
                            </h3>
                            </Fade>
                            <Fade bottom delay={300}>
                            <p className='project-time'>
                                Janurary 2022-Present
                            </p>
                            </Fade>
                            <Fade bottom delay={400}>
                            <div className='project-details'>
                                <ul>
                                    <li>
                                        Users are able to create, buy, and sell NFTs.
                                    </li>
                                    <li>
                                        They can view a homepage which displays all NFTs on the market
                                    </li>
                                    <li>
                                        They can also view a creator dashboard that contains the 
                                        NFTs they have created as well as the ones they own.
                                    </li>
                                    <li>
                                        In order to create this project, I utilized Solidity, Polygon, Infura, IPFS, 
                                        Next.js, Ethers.js, and Hardhat.
                                    </li>
                                </ul>
                            </div>
                            </Fade>
                            <Fade bottom delay={800}>
                            <ul className='project-tech-list'>
                                <li>Solidity</li>
                                <li>Next.js</li>
                                <li>Ethers.js</li>
                                <li>Infura</li>
                                <li>IPFS</li>
                                <li>Hardhat</li>
                            </ul>
                            </Fade>
                        </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='tabpanel-4'>
                            <Fade bottom delay={200}>
                                <h3 className='project-title'>
                                    Decentralized Jag Bot
                                    <a href="https://github.com/JTStephens18/JagBot">
                                        <img alt="github" src={Github} width="20" height="20" className='matching-github'>
                                        </img>
                                    </a>
                                </h3>
                                </Fade>
                                <Fade bottom delay={300}>
                                <p className='project-category'>
                                    Semester coursework
                                </p>
                                <p className='project-time'>
                                    August-December 2021
                                </p>
                                </Fade>
                                <Fade bottom delay={400}>
                                <div className='project-details'>
                                    <ul>
                                        <li>
                                            Led team of 11: Organized meetings, delegated tasks, assisted team members debug, etc.
                                        </li>
                                        <li>
                                            Worked closely with subteam of 3 which focused on creating an oracle to interact with the Ethereum main net.
                                        </li>
                                        <li>
                                            Utilized Web3 Python library to query APIs for crypto price information.
                                        </li>
                                        <li>
                                            Wrote a machine learning script to predict whether to buy ot sell a certain cryptocurrency.
                                        </li>
                                    </ul>
                                </div>
                                </Fade>
                                <Fade bottom delay={800}>
                                <ul className='project-tech-list'>
                                    <li>Solidty</li>
                                    <li>Python</li>
                                    <li>Web3.py</li>
                                    <li>React</li>
                                </ul>
                                </Fade>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='tabpanel-5'>
                            <Fade bottom delay={200}>
                                <h3 className='project-title'>
                                    Parking Lot App
                                    <a href="https://github.com/JTStephens18/ParkingLotApp">
                                        <img alt="github" src={Github} width="20" height="20" className='matching-github'>
                                        </img>
                                    </a>
                                </h3>
                                </Fade>
                                <Fade bottom delay={300}>
                                <p className='project-category'>
                                    Semester coursework
                                </p>
                                <p className='project-time'>
                                    August-December 2021
                                </p>
                                </Fade>
                                <Fade bottom delay={400}>
                                <div className='project-details'>
                                    <ul>
                                        <li>
                                            Using Microsoft secure software methodology, we incorporated touchpoints 
                                            outlined by McGraw to fix bugs, apply patches to vulnerabilites, and features 
                                            which enhanced the security of the app. 
                                        </li>
                                        <li>
                                            Provide commuters with direct access to parking lot information and availability.
                                        </li>
                                        <li>
                                            Change status of parking spots (Empty or Occupied).
                                        </li>
                                        <li>
                                            Allow differential access to web pages based on type of user.
                                        </li>
                                        <li>
                                            Allow commuters to claim and release parking spaces.
                                        </li>
                                        <li>
                                            Provide lot administrators access to lot information.
                                        </li>
                                        <li>
                                            Allow access to available spaces on demand.
                                        </li>
                                    </ul>
                                </div>
                                </Fade>
                                <Fade bottom delay={800}>
                                <ul className='project-tech-list'>
                                    <li>React</li>
                                    <li>Python</li>
                                </ul>
                                </Fade>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='tabpanel-6'>
                            <Fade bottom delay={200}>
                                <h3 className='project-title'>
                                    Vulnerability analysis for DeFi 
                                </h3>
                                </Fade>
                                <Fade bottom delay={300}>
                                <p className='project-time'>
                                    Janurary 2022-Present 
                                </p>
                                </Fade>
                                <Fade bottom delay={400}>
                                <div className='project-details'>
                                    <ul>
                                        <li>
                                            Currently leading a group of 6 that is researching DeFi vulnerabilities 
                                            within smart contracts and front-ends.
                                        </li>
                                        <li>
                                            We are reviewing open-source security analysis tools for the web, JavaScript frameworks, 
                                            Web3 libraries, and smart contracts. Such as Slither, Mythx, Zeus, and various Ethereum debuggers.
                                        </li>
                                        <li>
                                            We are also studying recent DeFi hacks and examining the source code 
                                            of various interfaces in DeFi projects.
                                        </li>
                                        <li>
                                            Using this information we would like to build our own security tool
                                            utilizing openAi to analyze source code for vulnerabilites.
                                        </li>
                                    </ul>
                                </div>
                                </Fade>
                            </div>
                        </TabPanel>
                    </div>
                    </Tabs>
                </div>
            </section>
        );
    }
 }

export default Experience