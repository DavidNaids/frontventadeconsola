import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailconsoleComponent } from './detailconsole.component';

describe('DetailconsoleComponent', () => {
  let component: DetailconsoleComponent;
  let fixture: ComponentFixture<DetailconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailconsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
