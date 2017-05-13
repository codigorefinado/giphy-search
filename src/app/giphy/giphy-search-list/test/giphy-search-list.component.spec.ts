import { DebugElement } from '@angular/core/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShareModuleModule } from '../../../share/share.module';
import { GiphySearchListComponent } from '../giphy-search-list.component';
describe('', () => {

  let fixture: ComponentFixture<GiphySearchListComponent>;
  let giphyComponent: GiphySearchListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ShareModuleModule ],
      declarations: [ GiphySearchListComponent ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GiphySearchListComponent);
      giphyComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('Deveria ter criado GiphySearchListComponent', () => {
    expect(giphyComponent).toBeTruthy();
    expect(giphyComponent).not.toBeNull();
  });

  it('Deveria ter duas tag a na renderização do componente GiphySearchList', () => {
    giphyComponent.gifsList = [
      {
        id: '1',
        url: 'localhost',
        images: { fixed_height: { url: 'localhost/01.gif' } }
      },
      {
        id: '2',
        url: 'localhost:8080',
        images: { fixed_height: { url: 'localhost/01.gif' } }
      }
    ];

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
      expect(debugElements.length).toBe(2);
    });

  });

});
