import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainaListComponent } from './paina-list.component';

describe('PainaListComponent', () => {
  let component: PainaListComponent;
  let fixture: ComponentFixture<PainaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
