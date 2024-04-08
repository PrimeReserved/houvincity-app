import { render } from '@testing-library/react';
import Hero from '@/components/Hero/Hero';

describe('Hero Component', () => {
  it('renders with provided props', () => {
    const props = {
      image: './images/blog/Hero section.png',
      title: 'Sample Title',
      description: 'Sample Description',
    };

    const { getByTestId, getByText } = render(<Hero {...props} />);
    
    const heroElement = getByTestId('hero');
    expect(heroElement).toBeInTheDocument();

    const titleElement = getByText('Sample Title');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = getByText('Sample Description');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders default image if image prop is not provided', () => {
    const props = {
      title: 'Sample Title',
      description: 'Sample Description',
    };

    const { getByTestId } = render(<Hero {...props} />);
    
    const heroElement = getByTestId('hero');
    expect(heroElement).toBeInTheDocument();

    const backgroundImageStyle = heroElement.getAttribute('data-background-image');
    expect(backgroundImageStyle).toContain(`url('./images/blog/Hero section.png')`);
  });

  it('renders children', () => {
    const props = {
      title: 'Sample Title',
      description: 'Sample Description',
    };

    const { getByText } = render(
      <Hero {...props}>
        <div>Child Component</div>
      </Hero>
    );

    const childElement = getByText('Child Component');
    expect(childElement).toBeInTheDocument();
  });

  it('matches snapshot with provided props', () => {
    const props = {
      image: './images/blog/Hero section.png',
      title: 'Sample Title',
      description: 'Sample Description',
    };

    const { asFragment } = render(<Hero {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with default image if image prop is not provided', () => {
    const props = {
      title: 'Sample Title',
      description: 'Sample Description',
    };

    const { asFragment } = render(<Hero {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with children', () => {
    const props = {
      title: 'Sample Title',
      description: 'Sample Description',
    };

    const { asFragment } = render(
      <Hero {...props}>
        <div>Child Component</div>
      </Hero>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
