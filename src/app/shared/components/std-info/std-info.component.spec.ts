import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdInfoComponent } from './std-info.component';

describe('StdInfoComponent', () => {
  let component: StdInfoComponent;
  let fixture: ComponentFixture<StdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
