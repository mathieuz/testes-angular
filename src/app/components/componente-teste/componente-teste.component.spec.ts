import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTesteComponent } from './componente-teste.component';

describe('ComponenteTesteComponent', () => {
  let component: ComponenteTesteComponent;
  let fixture: ComponentFixture<ComponenteTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
