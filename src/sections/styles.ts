import { Font, StyleSheet } from '@react-pdf/renderer';
import path from 'node:path';

Font.register({
  family: 'Avenir',
  fonts: [
    {
      src: path.resolve('resources/fonts/Avenir/Avenir-Book.ttf')
    },
    {
      fontStyle: 'italic',
      src: path.resolve('resources/fonts/Avenir/Avenir-BookOblique.ttf')
    },
    {
      fontWeight: 300,
      src: path.resolve('resources/fonts/Avenir/Avenir-Light.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 300,
      src: path.resolve('resources/fonts/Avenir/Avenir-LightOblique.ttf')
    },
    {
      fontWeight: 500,
      src: path.resolve('resources/fonts/Avenir/Avenir-Medium.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 500,
      src: path.resolve('resources/fonts/Avenir/Avenir-MediumOblique.ttf')
    },
    {
      fontWeight: 900,
      src: path.resolve('resources/fonts/Avenir/Avenir-Heavy.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 900,
      src: path.resolve('resources/fonts/Avenir/Avenir-HeavyOblique.ttf')
    }
  ]
});

Font.register({
  family: 'Raleway',
  fonts: [
    {
      fontWeight: 100,
      src: path.resolve('resources/fonts/Raleway/Raleway-Thin.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 100,
      src: path.resolve('resources/fonts/Raleway/Raleway-ThinItalic.ttf')
    },
    {
      fontWeight: 200,
      src: path.resolve('resources/fonts/Raleway/Raleway-ExtraLight.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 200,
      src: path.resolve('resources/fonts/Raleway/Raleway-ExtraLightItalic.ttf')
    },
    {
      fontWeight: 300,
      src: path.resolve('resources/fonts/Raleway/Raleway-Light.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 300,
      src: path.resolve('resources/fonts/Raleway/Raleway-LightItalic.ttf')
    },
    {
      src: path.resolve('resources/fonts/Raleway/Raleway-Regular.ttf')
    },
    {
      fontStyle: 'italic',
      src: path.resolve('resources/fonts/Raleway/Raleway-Italic.ttf')
    },
    {
      fontWeight: 500,
      src: path.resolve('resources/fonts/Raleway/Raleway-Medium.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 500,
      src: path.resolve('resources/fonts/Raleway/Raleway-MediumItalic.ttf')
    },
    {
      fontWeight: 600,
      src: path.resolve('resources/fonts/Raleway/Raleway-SemiBold.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 600,
      src: path.resolve('resources/fonts/Raleway/Raleway-SemiBoldItalic.ttf')
    },
    {
      fontWeight: 700,
      src: path.resolve('resources/fonts/Raleway/Raleway-Bold.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 700,
      src: path.resolve('resources/fonts/Raleway/Raleway-BoldItalic.ttf')
    },
    {
      fontWeight: 800,
      src: path.resolve('resources/fonts/Raleway/Raleway-ExtraBold.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 800,
      src: path.resolve('resources/fonts/Raleway/Raleway-ExtraBoldItalic.ttf')
    },
    {
      fontWeight: 900,
      src: path.resolve('resources/fonts/Raleway/Raleway-Black.ttf')
    },
    {
      fontStyle: 'italic',
      fontWeight: 900,
      src: path.resolve('resources/fonts/Raleway/Raleway-BlackItalic.ttf')
    }
  ]
});

export default StyleSheet.create({
  headerBackground: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    height: '15%',
    justifyContent: 'center'
  },
  headerTitle: {
    border: '5px solid white',
    color: 'white',
    fontFamily: 'Raleway',
    fontSize: '24pt',
    fontWeight: 'bold',
    paddingHorizontal: '60px',
    paddingVertical: '10px'
  },
  headerSubtitle: {
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Avenir',
    fontSize: '18pt',
    marginTop: '-15px',
    paddingHorizontal: '20px',
    paddingVertical: '5px'
  },
  headerLinks: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Avenir',
    fontSize: '12pt',
    marginTop: '5px'
  },
  headerLink: {
    color: 'white',
    textDecoration: 'none'
  },
  contentTitle: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Raleway',
    fontSize: '14pt',
    fontWeight: 'bold',
    padding: '5px'
  },
  contentSubtitle: {
    fontFamily: 'Raleway',
    fontSize: '12pt',
    fontWeight: 'bold',
    marginTop: '2px'
  },
  contentBoldText: {
    fontFamily: 'Avenir',
    fontSize: '11pt',
    fontWeight: 'bold',
    marginVertical: '2px'
  },
  contentText: {
    fontFamily: 'Avenir',
    fontSize: '11pt'
  }
});
