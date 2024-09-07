import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComAComponent } from './string-com-a.component';

describe('StringComAComponent', () => {
  let component: StringComAComponent;
  let fixture: ComponentFixture<StringComAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringComAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringComAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
