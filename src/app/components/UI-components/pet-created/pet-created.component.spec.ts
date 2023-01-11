import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCreatedComponent } from './pet-created.component';

describe('PetCreatedComponent', () => {
  let component: PetCreatedComponent;
  let fixture: ComponentFixture<PetCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
