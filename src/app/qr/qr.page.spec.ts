import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRPage } from './qr.page';

describe('QRPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QRPage
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QRPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'qr-reader'`, () => {
    const fixture = TestBed.createComponent(QRPage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('qr-reader');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(QRPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qr-reader app is running!');
  });
});
