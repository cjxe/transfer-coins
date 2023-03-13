import ButtonWithIcon from '../components/Button/ButtonWithIcon';
import TestSVG from '../assets/icons/test.svg';
import FeatureContainer from '@/components/Features/FeatureContainer/FeatureContainer';

function Test() {
  return (
    <div>
      <div>
        <FeatureContainer
          headingText="Send and receive safely"
          descriptionText={[
            'Stop exporting your private keys to others. Instead, copy and paste the receiving address to your favourite cryptocurrency wallet or use our cryptocurrency wallet integrations.',
            <br />,
            <br />,
            '“Not your keys, not your coins.”',
          ]}
        />
      </div>
    </div>
  );
}

export default Test;
