import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantAjoutComponent } from './enseignant-ajout.component';

describe('EnseignantAjoutComponent', () => {
  let component: EnseignantAjoutComponent;
  let fixture: ComponentFixture<EnseignantAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
