import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVoterComponent } from './my-voter.component';

describe('MyVoterComponent', () => {
  let component: MyVoterComponent;
  let fixture: ComponentFixture<MyVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
