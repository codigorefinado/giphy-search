import { GiphySearchService } from '../giphy-search.service';

describe('giphy-search.service.spec.ts', () => {

  const httpMock = jasmine.createSpyObj('Http', [ 'get' ]);

  let service: GiphySearchService;

  beforeEach(() => {
    service = new GiphySearchService(httpMock);
  });

  it('pesquisarGiphy', () => {
    service.pesquisarGiphy('10', 'happy');

    expect(httpMock.get).toHaveBeenCalled();
    expect(httpMock.get).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC&limit=10');
  });

  it('getUrl', () => {
    const url = service.getUrl('10', 'happy');

    expect(url)
      .toBe('https://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC&limit=10');
  });


});



