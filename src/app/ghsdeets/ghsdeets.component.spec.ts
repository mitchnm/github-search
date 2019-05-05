import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GHSdeetsComponent } from './ghsdeets.component';

describe('GHSdeetsComponent', () => {
  let component: GHSdeetsComponent;
  let fixture: ComponentFixture<GHSdeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GHSdeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GHSdeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
