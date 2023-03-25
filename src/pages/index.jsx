import React from 'react';
import { useTheme } from 'next-themes';
import {
  HiCollection,
  HiFingerPrint,
  HiSparkles,
  HiMoon,
  HiSun,
  HiArrowRight,
} from 'react-icons/hi';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import {
  BrandLogo,
  HeroUllustration,
  SecureIllustration,
  QRCodeIllustration,
  EthereumConnectedPathsIllustration,
  WebDesignerIllustration,
  StreamerOnBrowserIllustration,
} from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';
import {
  MetaMaskIcon,
  TrezorIcon,
  LedgerIcon,
  WalletConnectIcon,
  PhantomIcon,
  BitcoinIcon,
  BNBIcon,
  EthereumIcon,
  ArbitrumIcon,
  OptimismIcon,
  PolygonIcon,
  FantomIcon,
  AvalancheIcon,
  TronIcon,
  SolanaIcon,
  LitecoinIcon,
  DogecoinIcon,
} from '@/assets/icons/cc/index';
import { StreamelementsIcon, StreamlabsIcon } from '@/assets/icons/socialMedia';
import SectionContainer from '@/components/SectionContainer/SectionContainer';
import FeatureMinicard from '@/components/Features/FeatureMinicard/FeatureMinicard';
import Navbar from '@/components/Navbar/Navbar';
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import Button from '@/components/Buttons/Button';
import Footer from '@/components/Footer/Footer';
import Brand from '@/components/Utils/Brand/Brand';
import HR from '@/components/Utils/HR/HR';
import Hero from '@/components/Hero/Hero';
import { Typewriter } from 'react-simple-typewriter';
import FeatureContainer from '@/components/Features/FeatureContainer/FeatureContainer';
import PlanCard from '@/components/PlanCard/PlanCard';
import Head from 'next/head';

// TODO BITTIKTEN SONRA `Navbar.stories.jsx`'i updatele
function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <Head>
        <title>Transfer Coins - Home page</title>
        <meta
          name="description"
          content="A new, safe and easy way to share all of your cryptocurrency addresses with one link"
        />
        <meta
          name="keywords"
          content="transfer, coins, crypto, payment, cryptocurrency, address, share, network, all"
        />
      </Head>
      <Navbar>
        <div className="flex flex-row justify-between">
          <Navbar.Brand BrandIcon={BrandLogo} brandName="Transfer Coins" size="sm" />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="flex xs:flex-col xs:gap-4 lg:flex-row lg:gap-8">
            <Navbar.Link href="/#features">Features</Navbar.Link>
            <Navbar.Link href="/#pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/help#faq">FAQ</Navbar.Link>
            <Navbar.Link href="/help#contact">Contact</Navbar.Link>
          </div>
          <div className="flex gap-4 xs:flex-col lg:flex-row lg:items-center">
            <VerticalSeparator className="stroke-zinc-200 dark:stroke-zinc-700 xs:hidden lg:block" />
            <ButtonWithIcon
              onClick={() => {
                return currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
              }}
              variant="secondary"
              size="base"
              Icon={currentTheme === 'dark' ? HiMoon : HiSun}
              aria-label="dark mode"
            />
            <Button variant="secondary" size="base" className="lg:px-3 lg:py-2 lg:text-sm">
              Log in
            </Button>
            <Button variant="primary" size="base" className="lg:px-3 lg:py-2 lg:text-sm">
              Join now
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div className="[&>*:nth-child(even)]:bg-zinc-50 dark:[&>*:nth-child(even)]:bg-zinc-900">
        <Hero>
          <div className="flex flex-col xs:items-center xs:gap-4 lg:w-4/6 lg:items-start lg:gap-6">
            <Hero.Heading>
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent dark:from-teal-600 dark:to-teal-400">
                Share
              </span>{' '}
              all your cryptocurrency addresses with{' '}
              <span className="text-teal-600 dark:text-teal-400">
                1 <Typewriter words={['link', 'QR']} loop cursor delaySpeed={3000} />
              </span>
            </Hero.Heading>
            <Hero.Description>
              Send and receive over 100 different cryptocurrencies on over 5 different networks.
            </Hero.Description>
            <div className="flex flex-row gap-4 xs:mt-2 xs:justify-center lg:mt-0 lg:justify-start">
              <Button
                variant="gradientTeal"
                size="lg"
                className="lg:px-6 lg:py-3.5 lg:text-base"
                RightIcon={HiArrowRight}
              >
                Get started
              </Button>
              <Button variant="secondary" size="lg" className="lg:px-6 lg:py-3.5 lg:text-base">
                Live demo
              </Button>
            </div>
          </div>
          <div className="xs:hidden lg:block lg:w-2/6">
            <HeroUllustration className="h-full w-full" />
          </div>
        </Hero>
        <SectionContainer
          headingText="Transferring coins made easy"
          descriptionText="We did all the thinking so you don’t have to."
          sectionId="features"
        >
          <div className="flex xs:flex-col xs:gap-12 lg:mx-8 lg:flex-row lg:gap-8">
            <FeatureMinicard
              headingText="Secure transfer"
              descriptionText="Connect your favourite wallet and we will take care of the rest."
              Icon={HiFingerPrint}
              href="#SendAndReceiveSafely"
            />
            <FeatureMinicard
              headingText="All-in-One link"
              descriptionText="Stop sending multiple cryptocurrency addresses with incomplete information."
              Icon={HiCollection}
              href="#ShareCoinsAndNetworks"
            />
            <FeatureMinicard
              headingText="Personalized page"
              descriptionText="Add custom colours to your page; be unique, 
      be different."
              Icon={HiSparkles}
              href="#CustomiseYourPage"
            />
          </div>
        </SectionContainer>
        <FeatureContainer
          id="SendAndReceiveSafely"
          headingText="Send and receive safely"
          descriptionText={[
            'Stop exporting your private keys to others. Instead, copy and paste the receiving address to your favourite cryptocurrency wallet or use our cryptocurrency wallet integrations.',
            <br />,
            <br />,
            '“Not your keys, not your coins.”',
          ]}
          icons={[MetaMaskIcon, TrezorIcon, LedgerIcon, WalletConnectIcon, PhantomIcon]}
          iconGap="gap-7"
          Illustration={SecureIllustration}
        />
        <FeatureContainer
          id="ShareCoinsAndNetworks"
          headingText="Share hundreds of coin and network combinations"
          descriptionText={[
            'Easily share all your cryptocurrency addresses and the networks they are on. You can also configure custom addresses for specific coins!',
          ]}
          icons={[
            EthereumIcon,
            ArbitrumIcon,
            OptimismIcon,
            PolygonIcon,
            BNBIcon,
            FantomIcon,
            AvalancheIcon,
            TronIcon,
            SolanaIcon,
            BitcoinIcon,
            LitecoinIcon,
            DogecoinIcon,
          ]}
          iconGap="gap-5"
          Illustration={EthereumConnectedPathsIllustration}
          isIllustrationOnTheLeft={false}
        />
        <FeatureContainer
          id="GenerateAQRCode"
          headingText="Generate a QR code"
          descriptionText={[
            'Display it on your social profile, on your shop’s window, on the door of your minivan, and on your business card. The possibilities are endless.',
          ]}
          Illustration={QRCodeIllustration}
        />
        <FeatureContainer
          id="CustomiseYourPage"
          headingText="Customise your page"
          descriptionText={[
            'Change the background colour to something you want! We have a few default options that we think suit the best but you can also choose your own.',
          ]}
          Illustration={WebDesignerIllustration}
          isIllustrationOnTheLeft={false}
        />
        <FeatureContainer
          id="IntegrateWithinYourLivestream"
          headingText="Integrate user messages within your livestream"
          descriptionText={[
            'Receive cryptocurrency donations on your livestream with a message from the viewer! Currently, we support Streamlabs and StreamElements integrations.',
          ]}
          icons={[StreamlabsIcon, StreamelementsIcon]}
          Illustration={StreamerOnBrowserIllustration}
        />
        <SectionContainer
          headingText="Choose the right plan for your business"
          descriptionText="You can start with the starter plan and upgrade it in the future."
          sectionId="pricing"
        >
          <div className="flex xs:flex-col xs:gap-2 lg:flex-row lg:gap-4 2xl:gap-12">
            <PlanCard>
              <div className="flex flex-col gap-4">
                <PlanCard.Name>Starter</PlanCard.Name>
                <PlanCard.Description>
                  Everything that you need to get you started
                </PlanCard.Description>
              </div>
              <div className="flex flex-col content-end justify-end lg:mt-10">
                <div className="mb-10 flex flex-row items-end justify-center gap-2">
                  <PlanCard.Price>Free</PlanCard.Price>
                </div>
                <ul className="mt-4 mb-10 flex flex-col gap-5">
                  <PlanCard.Feature isIncluded>5 cryptocurrencies</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>2 networks</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Receive messages</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Generate a QR code</PlanCard.Feature>
                  <PlanCard.Feature isIncluded={false}>Customise your page</PlanCard.Feature>
                  <PlanCard.Feature isIncluded={false}>
                    Integrate Streamlabs and StreamElements
                  </PlanCard.Feature>
                  <PlanCard.Feature isIncluded={false}>
                    Add your own cryptocurrency or network to your home page
                  </PlanCard.Feature>
                </ul>
                <Button variant="primary" size="base">
                  Choose plan
                </Button>
              </div>
            </PlanCard>
            <PlanCard isRainbow>
              <div className="flex flex-col gap-4">
                <PlanCard.Name>Creative</PlanCard.Name>
                <PlanCard.Description>
                  The push you need to enrich your customer experience
                </PlanCard.Description>
              </div>
              <div className="flex flex-col content-end justify-end lg:mt-10">
                <div className="mb-10 flex flex-row items-end justify-center gap-2">
                  <PlanCard.Price>$2</PlanCard.Price>
                  <PlanCard.Description>/month</PlanCard.Description>
                </div>
                <ul className="mt-4 mb-10 flex flex-col gap-5">
                  <PlanCard.Feature isIncluded>Over 100 cryptocurrencies</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Over 5 networks</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Receive messages</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Generate a QR code</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Customise your page</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>
                    Integrate Streamlabs and StreamElements
                  </PlanCard.Feature>
                  <PlanCard.Feature isIncluded={false}>
                    Add your own cryptocurrency or network to your home page
                  </PlanCard.Feature>
                </ul>
                <Button variant="gradientRainbow" size="base">
                  Choose plan
                </Button>
              </div>
            </PlanCard>
            <PlanCard>
              <div className="flex flex-col gap-4">
                <PlanCard.Name>Partner</PlanCard.Name>
                <PlanCard.Description>
                  The ultimate plan to personalise your customer experience
                </PlanCard.Description>
              </div>
              <div className="flex flex-col content-end justify-end lg:mt-10">
                <div className="mb-10 flex flex-row items-end justify-center gap-2">
                  <PlanCard.Price>Custom</PlanCard.Price>
                </div>
                <ul className="mt-4 mb-10 flex flex-col gap-5">
                  <PlanCard.Feature isIncluded>Over 100 cryptocurrencies</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Over 5 networks</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Receive messages</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Generate a QR code</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>Customise your page</PlanCard.Feature>
                  <PlanCard.Feature isIncluded>
                    Integrate Streamlabs and StreamElements
                  </PlanCard.Feature>
                  <PlanCard.Feature isIncluded>
                    Add your own cryptocurrency or network to your home page
                  </PlanCard.Feature>
                </ul>
                <Button variant="primary" size="base">
                  Talk to sales
                </Button>
              </div>
            </PlanCard>
          </div>
        </SectionContainer>
        <SectionContainer
          headingText="Try it out, it’s free anyway"
          descriptionText="Got any questions? Check out the FAQ."
          sectionId="CTA"
        >
          <Button variant="primary" size="lg" RightIcon={HiArrowRight}>
            Get started
          </Button>
        </SectionContainer>
      </div>
      <Footer>
        <div className="flex justify-between xs:flex-col xs:gap-4 lg:flex-row lg:gap-0">
          <Brand size="sm" BrandIcon={BrandLogo} brandName="Transfer Coins" />
          <hr className="my-4 h-[1px] border-0 bg-zinc-700 xs:inline-block lg:hidden" />
          <div className="flex gap-10 xs:flex-col lg:flex-row">
            <Footer.Link href="/help#faq">FAQ</Footer.Link>
            <Footer.Link href="/help#contact">Contact</Footer.Link>
            <Footer.Link href="/legal/privacy-policy">Privacy Policy</Footer.Link>
            <Footer.Link href="/legal/terms-of-servce">Terms of Service</Footer.Link>
          </div>
        </div>
        <HR />
        <div className="flex justify-between">
          <p className="text-base font-normal text-zinc-400 xs:hidden lg:inline-block">
            © Transfer Coins. All rights reserved.
          </p>
          <div className="flex gap-4">
            <ButtonWithIcon
              variant="secondary"
              size="base"
              Icon={BsDiscord}
              aria-label="discord server"
            />
            <ButtonWithIcon
              variant="secondary"
              size="base"
              Icon={BsTwitter}
              aria-label="twitter account"
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Home;
