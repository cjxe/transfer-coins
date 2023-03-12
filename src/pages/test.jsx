import ButtonWithIcon from '../components/ButtonWithIcon/ButtonWithIcon';
import TestSVG from '../assets/icons/test.svg';

function Test() {
  return (
    <div>
      <div>
        <ButtonWithIcon variant="primary" size="xl" Icon={TestSVG} />
      </div>
    </div>
  );
}

export default Test;
