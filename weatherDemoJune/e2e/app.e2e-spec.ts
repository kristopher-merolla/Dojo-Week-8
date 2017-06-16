import { WeatherDemoJunePage } from './app.po';

describe('weather-demo-june App', () => {
  let page: WeatherDemoJunePage;

  beforeEach(() => {
    page = new WeatherDemoJunePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
