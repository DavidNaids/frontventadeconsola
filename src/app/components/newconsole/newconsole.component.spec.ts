import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconsoleComponent } from './newconsole.component';

describe('NewconsoleComponent', () => {
  let component: NewconsoleComponent;
  let fixture: ComponentFixture<NewconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
