import {render, screen} from '@testing-library/react-native';
import React, {SVGProps} from 'react';
import {TextProps, ViewProps} from 'react-native';
import {PathProps} from 'react-native-svg';
import {ReactTestInstance} from 'react-test-renderer';

import {Barcode, CODE_SET_CHARACTERS, START_CHARACTERS} from './Barcode';

const getSvgProps = (view: ReactTestInstance): SVGProps<any> => {
  const svgView = view.children[0] as ReactTestInstance;
  return svgView.props;
};

const getSvgPathProps = (view: ReactTestInstance): PathProps => {
  const svgView = view.children[0] as ReactTestInstance;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- svgView.props.childrenがany型になってしまうため、型を強制的に指定
  return svgView.props.children.props as PathProps;
};

describe('Barcode only with required props', () => {
  it('renders successfully only with required props', () => {
    render(
      <Barcode
        value={`${START_CHARACTERS['CODE-A']}0123456789${CODE_SET_CHARACTERS['CODE-C']}012345`}
        viewProps={{testID: 'Barcode'}}
      />,
    );
    const barcode = screen.queryByTestId('Barcode');
    expect(barcode).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});

describe('Barcode with all format', () => {
  it('renders successfully with CODE128', () => {
    render(
      <Barcode
        value={`${START_CHARACTERS['CODE-A']}0123456789${CODE_SET_CHARACTERS['CODE-C']}012345`}
        format="CODE128"
        viewProps={{testID: 'Barcode'}}
      />,
    );
    expect(screen).toMatchSnapshot();
    const view = screen.getByTestId('Barcode');
    const svgPathProps = getSvgPathProps(view);
    expect(svgPathProps.d).toBe(
      'M0,0h4v100h-4z M6,0h2v100h-2z M16,0h2v100h-2z M22,0h2v100h-2z M28,0h6v100h-6z M36,0h4v100h-4z M44,0h2v100h-2z M50,0h6v100h-6z M60,0h4v100h-4z M66,0h4v100h-4z M74,0h6v100h-6z M84,0h2v100h-2z M88,0h4v100h-4z M96,0h2v100h-2z M100,0h6v100h-6z M110,0h4v100h-4z M118,0h2v100h-2z M124,0h6v100h-6z M132,0h4v100h-4z M138,0h6v100h-6z M148,0h2v100h-2z M154,0h4v100h-4z M162,0h6v100h-6z M170,0h2v100h-2z M176,0h6v100h-6z M184,0h4v100h-4z M190,0h6v100h-6z M198,0h6v100h-6z M206,0h2v100h-2z M212,0h4v100h-4z M220,0h6v100h-6z M230,0h2v100h-2z M234,0h4v100h-4z M242,0h2v100h-2z M246,0h6v100h-6z M254,0h8v100h-8z M264,0h4v100h-4z M272,0h4v100h-4z M278,0h4v100h-4z M286,0h6v100h-6z M294,0h4v100h-4z M300,0h6v100h-6z M308,0h2v100h-2z M312,0h6v100h-6z M320,0h4v100h-4z M330,0h2v100h-2z M338,0h6v100h-6z M346,0h4v100h-4z M352,0h4v100h-4z M362,0h6v100h-6z M370,0h2v100h-2z M374,0h4v100h-4z',
    );
  });
  it('renders successfully with CODE128AUTO', () => {
    render(<Barcode value="0123456789" format="CODE128AUTO" viewProps={{testID: 'Barcode'}} />);
    expect(screen).toMatchSnapshot();
    const view = screen.getByTestId('Barcode');
    const svgPathProps = getSvgPathProps(view);
    expect(svgPathProps.d).toBe(
      'M0,0h4v100h-4z M6,0h2v100h-2z M12,0h6v100h-6z M22,0h4v100h-4z M30,0h4v100h-4z M36,0h4v100h-4z M44,0h6v100h-6z M52,0h4v100h-4z M58,0h6v100h-6z M66,0h2v100h-2z M70,0h6v100h-6z M78,0h4v100h-4z M88,0h2v100h-2z M98,0h2v100h-2z M102,0h4v100h-4z M110,0h4v100h-4z M116,0h4v100h-4z M122,0h8v100h-8z M132,0h2v100h-2z M142,0h4v100h-4z M148,0h2v100h-2z M154,0h4v100h-4z M164,0h6v100h-6z M172,0h2v100h-2z M176,0h4v100h-4z',
    );
  });
});

describe('Barcode with onError', () => {
  it('should be called on error', () => {
    const onError = jest.fn();
    // CODE128では使用できない値を設定
    render(<Barcode value="あいうえお" format="CODE128" onError={onError} viewProps={{testID: 'Barcode'}} />);
    expect(onError).toHaveBeenCalledTimes(1);
  });
});

describe('Barcode with all props', () => {
  it('should be applied properly', () => {
    render(
      <Barcode
        value="0123456789"
        format="CODE128AUTO"
        lineWidth={5}
        maxWidth={300}
        height={200}
        quietZone={5}
        lineColor="red"
        background="blue"
        text="012345"
        viewProps={{testID: 'Barcode', style: {alignItems: 'flex-start'}}}
        textProps={{testID: 'BarcodeText', style: {textAlign: 'left', color: 'yellow'}}}
      />,
    );
    expect(screen).toMatchSnapshot();
    const view = screen.getByTestId('Barcode');
    const viewProps = view.props as ViewProps;
    expect(viewProps.style).toEqual({
      backgroundColor: 'blue',
      alignItems: 'flex-start',
      paddingHorizontal: 5,
    });
    const svgProps = getSvgProps(view);
    const svgPathProps = getSvgPathProps(view);
    expect(svgProps.fill).toBe('red');
    expect(svgProps.height).toBe(200);
    expect(svgPathProps.d).toBe(
      'M0,0h6.666666666666667v200h-6.666666666666667z M10,0h3.3333333333333335v200h-3.3333333333333335z M20,0h10v200h-10z M36.66666666666667,0h6.666666666666667v200h-6.666666666666667z M50.00000000000001,0h6.666666666666667v200h-6.666666666666667z M60.00000000000001,0h6.666666666666667v200h-6.666666666666667z M73.33333333333334,0h10v200h-10z M86.66666666666667,0h6.666666666666667v200h-6.666666666666667z M96.66666666666667,0h10v200h-10z M110.00000000000001,0h3.3333333333333335v200h-3.3333333333333335z M116.66666666666667,0h10v200h-10z M130.00000000000003,0h6.666666666666667v200h-6.666666666666667z M146.66666666666666,0h3.3333333333333335v200h-3.3333333333333335z M163.33333333333334,0h3.3333333333333335v200h-3.3333333333333335z M170.00000000000003,0h6.666666666666667v200h-6.666666666666667z M183.33333333333334,0h6.666666666666667v200h-6.666666666666667z M193.33333333333334,0h6.666666666666667v200h-6.666666666666667z M203.33333333333334,0h13.333333333333334v200h-13.333333333333334z M220,0h3.3333333333333335v200h-3.3333333333333335z M236.66666666666669,0h6.666666666666667v200h-6.666666666666667z M246.66666666666666,0h3.3333333333333335v200h-3.3333333333333335z M256.6666666666667,0h6.666666666666667v200h-6.666666666666667z M273.33333333333337,0h10v200h-10z M286.6666666666667,0h3.3333333333333335v200h-3.3333333333333335z M293.33333333333337,0h6.666666666666667v200h-6.666666666666667z',
    );

    const text = screen.getByTestId('BarcodeText');
    const textProps = text.props as TextProps;
    expect(textProps.style).toEqual({textAlign: 'left', color: 'yellow'});
    const textValue = screen.queryByText('012345');
    expect(textValue).not.toBeNull();
  });
});
