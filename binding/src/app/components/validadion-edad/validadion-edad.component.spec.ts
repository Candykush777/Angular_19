import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadionEdadComponent } from './validadion-edad.component';

describe('ValidadionEdadComponent', () => {
  let component: ValidadionEdadComponent;
  let fixture: ComponentFixture<ValidadionEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidadionEdadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidadionEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
