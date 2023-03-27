import Hero from '@/components/core/Hero/Hero';
import Button from '@/components/core/Buttons/Button';
import { HeroUllustration } from '@/assets/illustrations';
import { HiArrowRight } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';

export default {
  title: 'Blocks/Marketing/Hero',
  component: Hero,
};

export const Full = {
  args: {
    children: (
      <>
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
            {/* // ! wrap the Button with <Link> in production */}
            <a href="/signup">
              <Button
                variant="gradientTeal"
                size="lg"
                className="lg:px-6 lg:py-3.5 lg:text-base"
                RightIcon={HiArrowRight}
              >
                Get started
              </Button>
            </a>
            <Button variant="secondary" size="lg" className="lg:px-6 lg:py-3.5 lg:text-base">
              Live demo
            </Button>
          </div>
        </div>
        <div className="xs:hidden lg:block lg:w-2/6">
          <HeroUllustration className="h-full w-full" />
        </div>
      </>
    ),
  },
};
