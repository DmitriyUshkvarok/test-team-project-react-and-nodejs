// import { Chip, LogoLink } from './Logo.styled';
import { Chip, LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    // <LogoLink to="/">
    //   pe<Chip>t</Chip>ly
    // </LogoLink>

    <LogoLink to="/">
      <Chip>p</Chip>
      <Chip>e</Chip>
      <Chip>t</Chip>
      <Chip>l</Chip>
      <Chip>y</Chip>
    </LogoLink>
  );
};
export default Logo;
