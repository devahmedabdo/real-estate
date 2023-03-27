import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAddComponent } from './sec-add.component';

describe('SecAddComponent', () => {
  let component: SecAddComponent;
  let fixture: ComponentFixture<SecAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
