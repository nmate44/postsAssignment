import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudinterfaceComponent } from './crudinterface.component';

describe('CrudinterfaceComponent', () => {
  let component: CrudinterfaceComponent;
  let fixture: ComponentFixture<CrudinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
