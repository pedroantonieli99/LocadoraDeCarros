import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFilmesComponent } from './cadastro-carros.component';

describe('CadastroFilmesComponent', () => {
  let component: CadastroFilmesComponent;
  let fixture: ComponentFixture<CadastroFilmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFilmesComponent]
    });
    fixture = TestBed.createComponent(CadastroFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
